import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { usePermissions } from "../hooks/usePermissions";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";
import {
  HiOutlineSun,
  HiOutlineSave,
  HiOutlineShieldCheck,
  HiOutlineOfficeBuilding,
  HiOutlinePhotograph,
  HiOutlineTag,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineChevronDown,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
import toast from "react-hot-toast";
import { settingsAPI, usersAPI } from "../services/api";
import type { UpdateSettingsRequest } from "../services/api";
import useCategories from "../hooks/useCategories";
import type { Branch, ItemCategory } from "../services/api";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";

const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) return imagePath;
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${API_BASE_URL}${imagePath}`;
};

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const PageHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 32px auto;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const PageTitle = styled.h1`
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const PageSubtitle = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 16px;
  padding: 0;
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  box-shadow: ${(props) => props.theme.shadows.medium};
  backdrop-filter: blur(20px);
  overflow: hidden;
  margin-top: 32px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

const TabList = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.glass};
  border-bottom: 1px solid ${(props) => props.theme.colors.glassBorder};
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 24px;
  background: ${(props) =>
    props.$active ? props.theme.colors.surface : "transparent"};
  border: none;
  border-bottom: 3px solid
    ${(props) => (props.$active ? props.theme.colors.accent : "transparent")};
  color: ${(props) =>
    props.$active ? props.theme.colors.text : props.theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1rem;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) =>
      props.$active ? props.theme.colors.surface : props.theme.colors.glass};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) =>
      props.$active
        ? props.theme.colors.accent
        : props.theme.colors.textSecondary};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 0.9rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 0.85rem;
    gap: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const TabContent = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

const Section = styled.div`
  background: ${(props) => props.theme.colors.glass};
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.medium};
    border-color: ${(props) => props.theme.colors.accent}30;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin: 0 0 24px 0;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${(props) => props.theme.gradients.primary};
    border-radius: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.accent};
    background: ${(props) => props.theme.colors.accent}15;
    padding: 6px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* increased space between label and control */
  position: relative;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 20px; /* spacing below the label */
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 3px;
    height: 12px;
    background: ${(props) => props.theme.gradients.primary};
    border-radius: 2px;
  }
`;

const Input = styled.input`
  padding: 20px 22px; /* larger padding for clearer separation */
  border: 2px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  background: ${(props) => props.theme.colors.background};
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
    box-shadow: ${(props) => props.theme.shadows.glow},
      inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background: ${(props) => props.theme.colors.surface};
    transform: translateY(-1px);
  }

  &:hover:not(:focus) {
    border-color: ${(props) => props.theme.colors.accent}50;
  }

  @media (max-width: 480px) {
    padding: 18px 16px;
    font-size: 16px; /* Prevent zoom on iOS */
  }
`;

const Select = styled.select`
  padding: 20px 22px; /* larger padding for selects */
  border: 2px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  background: ${(props) => props.theme.colors.background};
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 16px;
  padding-right: 56px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
    box-shadow: ${(props) => props.theme.shadows.glow},
      inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background: ${(props) => props.theme.colors.surface};
    transform: translateY(-1px);
  }

  &:hover:not(:focus) {
    border-color: ${(props) => props.theme.colors.accent}50;
  }

  @media (max-width: 480px) {
    padding: 16px 14px;
    padding-right: 48px;
    font-size: 16px; /* Prevent zoom on iOS */
    background-position: right 12px center;
    background-size: 14px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SaveButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  background: ${(props) => props.theme.gradients.primary};
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const FileInput = styled.div`
  position: relative;
`;

const FileInputButton = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: ${(props) => props.theme.colors.glass};
  border: 2px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.surface};
    border-color: ${(props) => props.theme.colors.accent};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const HiddenFileInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const FilePreview = styled.div`
  margin-top: 8px;
  padding: 8px;
  background: ${(props) => props.theme.colors.glass};
  border-radius: 6px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const LogoPreview = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  padding: 16px;
  background: ${(props) => props.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
`;

const LogoImage = styled.img`
  max-width: 200px;
  max-height: 120px;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.shadows.small};
`;

const BranchesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BranchItem = styled.div`
  padding: 16px;
  background: ${(props) => props.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
`;

const BranchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const BranchName = styled.h4`
  margin: 0;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
`;

const BranchStatus = styled.span<{ $active: boolean }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  ${(props) =>
    props.$active
      ? `
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
  `
      : `
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  `}
`;

const BranchDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${(props) => props.theme.colors.accent}20;
  color: ${(props) => props.theme.colors.accent};
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`;

const AddButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 12px;
  background: ${(props) => props.theme.colors.accent};
  border: none;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.shadows.small};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-left: 8px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    background: ${(props) => props.theme.colors.glass};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.surface2};
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows.large};
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.accent}
    );
  }

  @media (max-width: 480px) {
    padding: 24px;
    border-radius: 16px;
  }
`;

const ModalTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: 600;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
`;

type SettingsSection = "profile" | "appearance" | "system";

const SettingsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, setMode } = useTheme();
  const { isAdmin } = usePermissions();
  const { user } = useAuth();
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("profile");
  const [saving, setSaving] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    theme: theme.mode as "light" | "dark" | "system",
    language: i18n.language,

    // Business settings
    shopName: "My POS Shop",
    shopLogo: null as File | null,
    shopEmail: "",
    vatRegistrationNumber: "",
    bankName: "",
    bankAccountName: "",
    ibanNumber: "",
    accountNumber: "",
    swiftCode: "",
    currency: "BHD",
    taxRate: 12,
    receiptFooter: "Thank you for your business!",
    branches: [] as Branch[],
    itemCategories: [] as ItemCategory[],
  });

  const [showBranchForm, setShowBranchForm] = useState(false);
  const [branchForm, setBranchForm] = useState({
    name: "",
    address: "",
    phone: "",
    cr: "",
    active: true,
  });
  const [editingBranchId, setEditingBranchId] = useState<number | null>(null);
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [bankOpen, setBankOpen] = useState(false);

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    avatar: null as File | null,
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [updatingProfile, setUpdatingProfile] = useState(false);

  // Load settings data on component mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        // Load business settings for all authenticated users
        const settingsResponse = await settingsAPI.getSettings();
        if (settingsResponse.success && settingsResponse.data) {
          const settings = settingsResponse.data;
          setFormData((prev) => ({
            ...prev,
            shopName: settings.shop_name,
            shopLogo: null, // File objects can't be loaded from API
            shopEmail: settings.shop_email || "",
            vatRegistrationNumber: settings.vat_registration_number || "",
            currency: settings.currency,
            taxRate: Number(settings.tax_rate),
            receiptFooter: settings.receipt_footer,
            bankAccountName: settings.bank_account_name || "",
            bankName: settings.bank_name || "",
            ibanNumber: settings.iban_number || "",
            accountNumber: settings.account_number || "",
            swiftCode: settings.swift_code || "",
          }));

          // Set logo preview if logo exists
          if (settings.shop_logo) {
            setLogoPreview(getImageUrl(settings.shop_logo));
          }
        }

        // Load branches only for admin users (branch management is admin-only)
        if (isAdmin) {
          const branchesResponse = await settingsAPI.getBranches();
          if (branchesResponse.success && branchesResponse.data) {
            setFormData((prev) => ({
              ...prev,
              branches: branchesResponse.data || [],
            }));
          }
        }
      } catch (error) {
        console.error("Error loading settings:", error);
        toast.error(t("settings.load_error"));
      }
    };

    loadSettings();
  }, [isAdmin, t]);

  const {
    categories,
    loading: categoriesLoading,
    reload: reloadCategories,
  } = useCategories();

  // Keep formData itemCategories in sync with the categories hook
  useEffect(() => {
    setFormData((prev) => ({ ...prev, itemCategories: categories || [] }));
  }, [categories]);

  // Load user profile data
  useEffect(() => {
    if (user) {
      setProfileForm((prev) => ({
        ...prev,
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileForm({ ...profileForm, avatar: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = async () => {
    if (!user) return;

    try {
      setUpdatingProfile(true);

      // Update email if changed
      if (profileForm.email && profileForm.email !== user.email) {
        await usersAPI.update(user.userid.toString(), {
          email: profileForm.email,
        });
      }

      // Update password if provided
      if (profileForm.newPassword) {
        if (!profileForm.currentPassword) {
          toast.error(t("settings.current_password_required"));
          setUpdatingProfile(false);
          return;
        }
        if (profileForm.newPassword !== profileForm.confirmPassword) {
          toast.error(t("settings.password_mismatch"));
          setUpdatingProfile(false);
          return;
        }
        if (profileForm.newPassword.length < 6) {
          toast.error(t("settings.password_too_short"));
          setUpdatingProfile(false);
          return;
        }

        await usersAPI.update(user.userid.toString(), {
          password: profileForm.newPassword,
          currentPassword: profileForm.currentPassword,
        });

        // Clear password fields
        setProfileForm((prev) => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
      }

      toast.success(t("settings.profile_updated"));
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(t("settings.profile_update_error"));
    } finally {
      setUpdatingProfile(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    let processedValue: string | number | boolean = value;
    if (type === "number") {
      processedValue = parseFloat(value) || 0;
    } else if (type === "checkbox") {
      processedValue = checked;
    }

    setFormData({
      ...formData,
      [name]: processedValue,
    });
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    setFormData({ ...formData, language: lang });
  };

  const openAddBranch = () => {
    setEditingBranchId(null);
    setBranchForm({ name: "", address: "", phone: "", cr: "", active: true });
    setShowBranchForm(true);
  };

  const openEditBranch = (branch: Branch) => {
    setEditingBranchId(branch.branchid);
    setBranchForm({
      name: branch.name,
      address: branch.address,
      phone: branch.phone || "",
      cr: branch.cr || "",
      active: branch.active,
    });
    setShowBranchForm(true);
  };

  const saveBranch = async () => {
    try {
      if (!branchForm.name || !branchForm.address) {
        toast.error(t("settings.branch_required_error"));
        return;
      }

      if (editingBranchId) {
        const resp = await settingsAPI.updateBranch(editingBranchId, {
          name: branchForm.name,
          address: branchForm.address,
          phone: branchForm.phone || undefined,
          cr: branchForm.cr || undefined,
          active: branchForm.active,
        });

        if (resp.success && resp.data) {
          setFormData((prev) => ({
            ...prev,
            branches: prev.branches.map((b) =>
              b.branchid === editingBranchId ? resp.data! : b
            ),
          }));
          toast.success(t("settings.branch_updated"));
        }
      } else {
        const resp = await settingsAPI.createBranch({
          name: branchForm.name,
          address: branchForm.address,
          phone: branchForm.phone || undefined,
          cr: branchForm.cr || undefined,
          active: branchForm.active,
        });

        if (resp.success && resp.data) {
          setFormData((prev) => ({
            ...prev,
            branches: [...prev.branches, resp.data!],
          }));
          toast.success(t("settings.branch_created"));
        }
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed");
    } finally {
      setShowBranchForm(false);
      setEditingBranchId(null);
    }
  };

  const confirmDeleteBranch = (branch: Branch) => {
    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: "8px", fontWeight: "500" }}>
          Delete Branch: {branch.name}?
        </div>
        <div
          style={{ fontSize: "14px", color: "#64748b", marginBottom: "12px" }}
        >
          This action cannot be undone.
        </div>
        <div
          style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => toast.dismiss(toastInstance.id)}
            style={{ padding: "6px 12px" }}
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              toast.dismiss(toastInstance.id);
              try {
                const resp = await settingsAPI.deleteBranch(branch.branchid);
                if (resp.success) {
                  setFormData((prev) => ({
                    ...prev,
                    branches: prev.branches.filter(
                      (b) => b.branchid !== branch.branchid
                    ),
                  }));
                  toast.success("Branch deleted successfully");
                }
              } catch (err) {
                console.error(err);
                toast.error("Failed to delete branch");
              }
            }}
            style={{
              padding: "6px 12px",
              background: "#ef4444",
              color: "white",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  const handleAddCategory = async () => {
    if (!newCategoryName.trim())
      return toast.error(t("settings.category_required_error"));
    try {
      const resp = await settingsAPI.createCategory({
        name: newCategoryName.trim(),
      });
      if (resp.success && resp.data) {
        setFormData((prev) => ({
          ...prev,
          itemCategories: [...prev.itemCategories, resp.data!],
        }));
        await reloadCategories();
        setNewCategoryName("");
        setShowCategoryInput(false);
        toast.success(t("settings.category_added"));
      }
    } catch (err) {
      console.error(err);
      toast.error(t("settings.add_category_error"));
    }
  };

  const confirmDeleteCategory = (categoryId: number) => {
    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: "8px", fontWeight: "500" }}>
          {t("settings.delete_category_confirm_title")}
        </div>
        <div
          style={{ fontSize: "14px", color: "#64748b", marginBottom: "12px" }}
        >
          {t("settings.delete_confirm_message")}
        </div>
        <div
          style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => toast.dismiss(toastInstance.id)}
            style={{ padding: "6px 12px" }}
          >
            {t("common.cancel")}
          </button>
          <button
            onClick={async () => {
              toast.dismiss(toastInstance.id);
              try {
                const resp = await settingsAPI.deleteCategory(categoryId);
                if (resp.success) {
                  setFormData((prev) => ({
                    ...prev,
                    itemCategories: prev.itemCategories.filter(
                      (c) => c.categoryid !== categoryId
                    ),
                  }));
                  await reloadCategories();
                  toast.success(t("settings.category_deleted"));
                }
              } catch (err) {
                console.error(err);
                toast.error(t("settings.delete_category_error"));
              }
            }}
            style={{
              padding: "6px 12px",
              background: "#ef4444",
              color: "white",
            }}
          >
            {t("common.delete")}
          </button>
        </div>
      </div>
    ));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      shopLogo: file,
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const handleThemeChange = (newTheme: string) => {
    const themeValue = newTheme as "light" | "dark" | "system";
    setMode(themeValue);
    setFormData({ ...formData, theme: themeValue });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSaving(true);

      // Save user preferences to localStorage
      localStorage.setItem("theme", formData.theme);

      // Save business settings to API (admin only)
      if (activeSection === "system" && isAdmin) {
        let settingsUpdate: FormData | UpdateSettingsRequest;
        const headers: Record<string, string> = {};

        if (formData.shopLogo) {
          const formDataToSend = new FormData();
          formDataToSend.append("shop_name", formData.shopName);
          formDataToSend.append("shop_email", formData.shopEmail);
          formDataToSend.append(
            "vat_registration_number",
            formData.vatRegistrationNumber
          );
          formDataToSend.append("currency", formData.currency);
          formDataToSend.append("tax_rate", formData.taxRate.toString());
          formDataToSend.append("receipt_footer", formData.receiptFooter);
          formDataToSend.append("shop_logo", formData.shopLogo);
          // Bank details
          formDataToSend.append("bank_name", formData.bankName || "");
          formDataToSend.append(
            "bank_account_name",
            formData.bankAccountName || ""
          );
          formDataToSend.append("iban_number", formData.ibanNumber || "");
          formDataToSend.append("account_number", formData.accountNumber || "");
          formDataToSend.append("swift_code", formData.swiftCode || "");
          settingsUpdate = formDataToSend;
        } else {
          settingsUpdate = {
            shop_name: formData.shopName,
            shop_email: formData.shopEmail,
            vat_registration_number: formData.vatRegistrationNumber,
            currency: formData.currency,
            tax_rate: parseFloat(formData.taxRate.toString()),
            receipt_footer: formData.receiptFooter,
            bank_name: formData.bankName || "",
            bank_account_name: formData.bankAccountName || "",
            iban_number: formData.ibanNumber || "",
            account_number: formData.accountNumber || "",
            swift_code: formData.swiftCode || "",
          };
          headers["Content-Type"] = "application/json";
        }

        const response = await settingsAPI.updateSettings(settingsUpdate);
        if (!response.success) {
          throw new Error(response.message || t("settings.save_error"));
        }
      }

      toast.success(t("settings.save_success"));
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error(
        error instanceof Error ? error.message : t("settings.save_error")
      );
    } finally {
      setSaving(false);
    }
  };

  const sections = [
    {
      id: "profile" as SettingsSection,
      label: t("settings.profile"),
      icon: HiOutlineUser,
    },
    {
      id: "appearance" as SettingsSection,
      label: t("settings.appearance"),
      icon: HiOutlineSun,
    },
    ...(isAdmin
      ? [
          {
            id: "system" as SettingsSection,
            label: t("settings.system"),
            icon: HiOutlineShieldCheck,
          },
        ]
      : []),
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("settings.title")}</PageTitle>
        <PageSubtitle>{t("settings.subtitle")}</PageSubtitle>
      </PageHeader>

      <ContentContainer>
        <TabContainer>
          <TabList>
            {sections.map((section) => (
              <Tab
                key={section.id}
                $active={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
              >
                <section.icon />
                {section.label}
              </Tab>
            ))}
          </TabList>

          <TabContent>
            {activeSection === "profile" && (
              <>
                <Section>
                  <SectionTitle>
                    <HiOutlineUser />
                    {t("settings.profile_information")}
                  </SectionTitle>

                  <FormGroup>
                    <Label htmlFor="username">{t("settings.username")}</Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      value={user?.username || ""}
                      disabled
                      style={{ opacity: 0.6, cursor: "not-allowed" }}
                    />
                    <div style={{ fontSize: "0.875rem", color: "#64748b", marginTop: "4px" }}>
                      {t("settings.username_cannot_change")}
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="profileEmail">
                      <HiOutlineMail style={{ display: "inline", marginRight: "8px" }} />
                      {t("settings.email")}
                    </Label>
                    <Input
                      id="profileEmail"
                      name="profileEmail"
                      type="email"
                      value={profileForm.email}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, email: e.target.value })
                      }
                      placeholder={t("settings.email_placeholder")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="role">{t("settings.role")}</Label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      value={user?.role || ""}
                      disabled
                      style={{ opacity: 0.6, cursor: "not-allowed", textTransform: "capitalize" }}
                    />
                  </FormGroup>
                </Section>

                <Section>
                  <SectionTitle>
                    <HiOutlineLockClosed />
                    {t("settings.change_password")}
                  </SectionTitle>

                  <FormGroup>
                    <Label htmlFor="currentPassword">
                      {t("settings.current_password")}
                    </Label>
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                      value={profileForm.currentPassword}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, currentPassword: e.target.value })
                      }
                      placeholder={t("settings.current_password_placeholder")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="newPassword">
                      {t("settings.new_password")}
                    </Label>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={profileForm.newPassword}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, newPassword: e.target.value })
                      }
                      placeholder={t("settings.new_password_placeholder")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="confirmPassword">
                      {t("settings.confirm_password")}
                    </Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={profileForm.confirmPassword}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, confirmPassword: e.target.value })
                      }
                      placeholder={t("settings.confirm_password_placeholder")}
                    />
                  </FormGroup>

                  <div style={{ marginTop: "24px" }}>
                    <SaveButton onClick={handleProfileUpdate} disabled={updatingProfile}>
                      <HiOutlineSave />
                      {updatingProfile ? t("settings.updating") : t("settings.update_profile")}
                    </SaveButton>
                  </div>
                </Section>
              </>
            )}

            {activeSection === "appearance" && (
              <Section>
                <SectionTitle>
                  <HiOutlineSun />
                  {t("settings.appearance")}
                </SectionTitle>

                <FormGroup>
                  <Label htmlFor="theme">{t("settings.theme")}</Label>
                  <Select
                    id="theme"
                    name="theme"
                    value={formData.theme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                  >
                    <option value="light">{t("settings.light")}</option>
                    <option value="dark">{t("settings.dark")}</option>
                    <option value="system">{t("settings.system_theme")}</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="language">{t("settings.language")}</Label>
                  <Select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleLanguageChange}
                  >
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                    <option value="tl">Filipino</option>
                    <option value="ur">اردو</option>
                    <option value="fa">فارسی</option>
                  </Select>
                </FormGroup>
              </Section>
            )}

            {activeSection === "system" && isAdmin && (
              <>
                <Section>
                  <SectionTitle>
                    <HiOutlineOfficeBuilding />
                    {t("settings.system")}
                  </SectionTitle>

                  <FormGroup>
                    <Label htmlFor="shopName">{t("settings.shop_name")}</Label>
                    <Input
                      id="shopName"
                      name="shopName"
                      type="text"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      placeholder={t("settings.shop_name_placeholder")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="shopEmail">
                      {t("settings.shop_email")}
                    </Label>
                    <Input
                      id="shopEmail"
                      name="shopEmail"
                      type="email"
                      value={formData.shopEmail}
                      onChange={handleInputChange}
                      placeholder={t("settings.shop_email_placeholder")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="vatRegistrationNumber">
                      {t("settings.vat_registration_number")}
                    </Label>
                    <Input
                      id="vatRegistrationNumber"
                      name="vatRegistrationNumber"
                      type="text"
                      value={formData.vatRegistrationNumber}
                      onChange={handleInputChange}
                      placeholder={t(
                        "settings.vat_registration_number_placeholder"
                      )}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="shopLogo">{t("settings.shop_logo")}</Label>
                    <FileInput>
                      <HiddenFileInput
                        id="shopLogo"
                        name="shopLogo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <FileInputButton htmlFor="shopLogo">
                        <HiOutlinePhotograph />
                        {t("settings.choose_logo")}
                      </FileInputButton>
                      {logoPreview && (
                        <LogoPreview>
                          <LogoImage src={logoPreview} alt="Logo preview" />
                        </LogoPreview>
                      )}
                      {formData.shopLogo && (
                        <FilePreview>
                          {t("settings.selected_file")} {formData.shopLogo.name}
                        </FilePreview>
                      )}
                    </FileInput>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="currency">{t("settings.currency")}</Label>
                    <Select
                      id="currency"
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                    >
                      <option value="BHD">{t("settings.currency_bhd")}</option>
                      <option value="USD">{t("settings.currency_usd")}</option>
                      <option value="EUR">{t("settings.currency_eur")}</option>
                      <option value="GBP">{t("settings.currency_gbp")}</option>
                      <option value="SAR">{t("settings.currency_sar")}</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="taxRate">{t("settings.tax_rate")}</Label>
                    <Input
                      id="taxRate"
                      name="taxRate"
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value={formData.taxRate}
                      onChange={handleInputChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="receiptFooter">
                      {t("settings.receipt_footer")}
                    </Label>
                    <Input
                      id="receiptFooter"
                      name="receiptFooter"
                      type="text"
                      value={formData.receiptFooter}
                      onChange={handleInputChange}
                      placeholder={t("settings.receipt_footer_placeholder")}
                    />
                  </FormGroup>

                  <Section style={{ marginTop: 12 }}>
                    <SectionTitle>
                      <HiOutlineOfficeBuilding />
                      {t("settings.bank_details")}
                      <div style={{ marginLeft: "auto" }}>
                        <IconButton
                          onClick={() => setBankOpen((prev) => !prev)}
                          aria-expanded={bankOpen}
                          title={
                            bankOpen ? t("common.close") : t("common.open")
                          }
                        >
                          <HiOutlineChevronDown
                            style={{
                              transform: bankOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.2s ease",
                            }}
                          />
                        </IconButton>
                      </div>
                    </SectionTitle>

                    <div style={{ display: bankOpen ? "block" : "none" }}>
                      <FormGroup>
                        <Label htmlFor="bankName">
                          {t("settings.bank_name")}
                        </Label>
                        <Input
                          id="bankName"
                          name="bankName"
                          type="text"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          placeholder={t("settings.bank_name_placeholder")}
                        />

                        <Label htmlFor="bankAccountName">
                          {t("settings.bank_account_name")}
                        </Label>
                        <Input
                          id="bankAccountName"
                          name="bankAccountName"
                          type="text"
                          value={formData.bankAccountName}
                          onChange={handleInputChange}
                          placeholder={t(
                            "settings.bank_account_name_placeholder"
                          )}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="ibanNumber">
                          {t("settings.iban_number")}
                        </Label>
                        <Input
                          id="ibanNumber"
                          name="ibanNumber"
                          type="text"
                          value={formData.ibanNumber}
                          onChange={handleInputChange}
                          placeholder={t("settings.iban_number_placeholder")}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="accountNumber">
                          {t("settings.account_number")}
                        </Label>
                        <Input
                          id="accountNumber"
                          name="accountNumber"
                          type="text"
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                          placeholder={t("settings.account_number_placeholder")}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="swiftCode">
                          {t("settings.swift_code")}
                        </Label>
                        <Input
                          id="swiftCode"
                          name="swiftCode"
                          type="text"
                          value={formData.swiftCode}
                          onChange={handleInputChange}
                          placeholder={t("settings.swift_code_placeholder")}
                        />
                      </FormGroup>
                    </div>
                  </Section>
                </Section>

                <Section>
                  <SectionTitle>
                    <HiOutlineOfficeBuilding />
                    {t("settings.branches")}
                  </SectionTitle>

                  <BranchesList>
                    {formData.branches.map((branch) => (
                      <BranchItem key={branch.branchid}>
                        <BranchHeader>
                          <BranchName>{branch.name}</BranchName>
                          <BranchStatus $active={branch.active}>
                            {branch.active
                              ? t("settings.active")
                              : t("settings.inactive")}
                          </BranchStatus>
                          <div
                            style={{
                              display: "flex",
                              gap: 8,
                              alignItems: "center",
                            }}
                          >
                            <IconButton
                              onClick={() => openEditBranch(branch)}
                              title="Edit Branch"
                            >
                              <HiOutlinePencil />
                            </IconButton>
                            <IconButton
                              onClick={() => confirmDeleteBranch(branch)}
                              title="Delete Branch"
                            >
                              <HiOutlineTrash />
                            </IconButton>
                          </div>
                        </BranchHeader>
                        <BranchDetails>
                          <div>
                            <strong>{t("settings.address")}</strong>{" "}
                            {branch.address}
                          </div>
                          <div>
                            <strong>{t("settings.phone")}</strong>{" "}
                            {branch.phone}
                          </div>
                          <div>
                            <strong>CR</strong> {branch.cr || "N/A"}
                          </div>
                        </BranchDetails>
                      </BranchItem>
                    ))}
                  </BranchesList>

                  <AddButton onClick={openAddBranch}>
                    <HiOutlineOfficeBuilding />
                    {t("settings.add_branch")}
                  </AddButton>
                </Section>

                <Section>
                  <SectionTitle>
                    <HiOutlineTag />
                    {t("settings.categories")}
                  </SectionTitle>

                  <CategoriesList>
                    {categoriesLoading && (
                      <div>
                        <Loader size={36} ariaLabel={t("common.loading")} />
                      </div>
                    )}
                    {!categoriesLoading &&
                      formData.itemCategories.map((category) => (
                        <CategoryTag key={category.categoryid}>
                          {category.name}
                          <IconButton
                            title={t("settings.delete_category")}
                            onClick={() =>
                              confirmDeleteCategory(category.categoryid)
                            }
                          >
                            <HiOutlineTrash />
                          </IconButton>
                        </CategoryTag>
                      ))}
                  </CategoriesList>

                  <div
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <AddButton
                      onClick={() => setShowCategoryInput(!showCategoryInput)}
                    >
                      <HiOutlineTag />
                      {t("settings.add_category")}
                    </AddButton>
                  </div>

                  {showCategoryInput && (
                    <div style={{ marginTop: 10 }}>
                      <FormGroup>
                        <Label htmlFor="newCategory">
                          {t("settings.category_name")}
                        </Label>
                        <Input
                          id="newCategory"
                          name="newCategory"
                          placeholder={t("settings.category_placeholder")}
                          value={newCategoryName}
                          onChange={(e) => setNewCategoryName(e.target.value)}
                        />
                      </FormGroup>
                      <Actions>
                        <SaveButton onClick={handleAddCategory}>
                          <HiOutlineSave /> {t("common.add")}
                        </SaveButton>
                        <AddButton
                          onClick={() => {
                            setShowCategoryInput(false);
                            setNewCategoryName("");
                          }}
                        >
                          {t("common.cancel")}
                        </AddButton>
                      </Actions>
                    </div>
                  )}
                </Section>

                <Actions>
                  <SaveButton onClick={handleSave} disabled={saving}>
                    <HiOutlineSave />
                    {saving ? (
                      <Loader
                        inline
                        size={18}
                        ariaLabel={t("common.loading")}
                      />
                    ) : (
                      t("common.save")
                    )}
                  </SaveButton>
                </Actions>
              </>
            )}
          </TabContent>
        </TabContainer>
      </ContentContainer>

      {/* Branch Modal */}
      {showBranchForm && (
        <Modal
          onClick={() => {
            setShowBranchForm(false);
            setEditingBranchId(null);
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>
              {editingBranchId
                ? t("settings.edit_branch")
                : t("settings.add_branch")}
            </ModalTitle>
            <FormGroup>
              <Label htmlFor="branchName">{t("settings.branch_name")}</Label>
              <Input
                id="branchName"
                name="branchName"
                value={branchForm.name}
                onChange={(e) =>
                  setBranchForm({ ...branchForm, name: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="branchAddress">{t("settings.address")}</Label>
              <Input
                id="branchAddress"
                name="branchAddress"
                value={branchForm.address}
                onChange={(e) =>
                  setBranchForm({ ...branchForm, address: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="branchPhone">{t("settings.phone")}</Label>
              <Input
                id="branchPhone"
                name="branchPhone"
                value={branchForm.phone}
                onChange={(e) =>
                  setBranchForm({ ...branchForm, phone: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="branchCr">CR</Label>
              <Input
                id="branchCr"
                name="branchCr"
                value={branchForm.cr}
                onChange={(e) =>
                  setBranchForm({ ...branchForm, cr: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={branchForm.active}
                  onChange={(e) =>
                    setBranchForm({ ...branchForm, active: e.target.checked })
                  }
                />{" "}
                {t("settings.active")}
              </label>
            </FormGroup>
            <ModalActions>
              <SaveButton onClick={() => saveBranch()} disabled={false}>
                <HiOutlineSave /> {t("common.save")}
              </SaveButton>
              <AddButton
                onClick={() => {
                  setShowBranchForm(false);
                  setEditingBranchId(null);
                }}
              >
                {t("common.cancel")}
              </AddButton>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
};

export default SettingsPage;
