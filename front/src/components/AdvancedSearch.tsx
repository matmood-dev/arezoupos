import { useState, useEffect } from "react";
import styled from "styled-components";
import { HiOutlineSearch, HiOutlineX, HiOutlineCalendar } from "react-icons/hi";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

const Container = styled.div<{ $isOpen?: boolean }>`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  width: 100%;
  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "grid" : "none")};
    position: fixed;
    left: 12px;
    right: 12px;
    top: 76px; /* below header */
    z-index: 1200;
    max-height: calc(100vh - 100px);
    overflow: auto;
    padding: 16px;
    box-shadow: ${(props) => props.theme.shadows.large};
    border-radius: 12px;
    background: ${(props) => props.theme.colors.surface2};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.glass};
  color: ${props => props.theme.colors.text};

  /* Space for our calendar icon */
  &[type='date'] {
    padding-right: 40px;
  }

  /* Hide native calendar indicator but keep it functional */
  &[type='date']::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  &[type='date']::-moz-calendar-picker-indicator {
    color: transparent;
    cursor: pointer;
  }
`;

const DateWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input { width: 100%; }
`;

const CalendarIcon = styled(HiOutlineCalendar)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.textSecondary};
  width: 18px;
  height: 18px;
  pointer-events: none;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  background: ${(props) => props.theme.colors.glass};
  color: ${(props) => props.theme.colors.text};
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  color: ${(props) => props.theme.colors.textSecondary};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.glass};
    transform: none;
    box-shadow: none;
  }
`;

const Actions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 10px;
    button {
      width: 100%;
    }
  }
`;

export type AdvancedFilter = {
  search?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  minStock?: string;
  maxStock?: string;
  // customers
  email?: string;
  phone?: string;
  address?: string;
  startDate?: string; // ISO date
  endDate?: string; // ISO date
  // orders
  status?: "pending" | "completed" | "cancelled";
  minTotal?: string;
  maxTotal?: string;
  orderId?: string;
  customerName?: string;
  branchId?: string;
};

export default function AdvancedSearch({
  categories = [],
  branches = [],
  onApply,
  onClear,
  initialFilters,
  isOpen = true,
  onClose,
  variant = "inventory",
}: {
  categories?: { categoryid: number; name: string }[];
  branches?: { branchid: number; name: string }[];
  onApply: (filters: AdvancedFilter) => void;
  onClear?: () => void;
  initialFilters?: AdvancedFilter;
  isOpen?: boolean;
  onClose?: () => void;
  variant?: "inventory" | "customers" | "orders";
}) {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<AdvancedFilter>({});

  const handleInput = (key: keyof AdvancedFilter, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => onApply(filters);

  const handleReset = () => {
    setFilters({});
    if (onClear) onClear();
  };

  // update internal state from parent if provided
  useEffect(() => {
    if (initialFilters) setFilters(initialFilters);
  }, [initialFilters]);

  return (
    <Container $isOpen={isOpen}>
      <Field>
        <Label>{t("advanced_search.search") || "Search"}</Label>
        <Input
          value={filters.search ?? ""}
          onChange={(e) => handleInput("search", e.target.value)}
          placeholder="Search by name or description"
        />
      </Field>

      {variant === "inventory" && (
        <Field>
          <Label>Category</Label>
          <Select
            value={filters.category ?? ""}
            onChange={(e) => handleInput("category", e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.categoryid} value={c.name}>
                {c.name}
              </option>
            ))}
          </Select>
        </Field>
      )}

      {variant === "inventory" && (
        <>
          <Field>
            <Label>Min Price (BHD)</Label>
            <Input
              type="number"
              min="0"
              step="0.001"
              value={filters.minPrice ?? ""}
              onChange={(e) => handleInput("minPrice", e.target.value)}
            />
          </Field>

          <Field>
            <Label>Max Price (BHD)</Label>
            <Input
              type="number"
              min="0"
              step="0.001"
              value={filters.maxPrice ?? ""}
              onChange={(e) => handleInput("maxPrice", e.target.value)}
            />
          </Field>

          <Field>
            <Label>Min Stock</Label>
            <Input
              type="number"
              min="0"
              step="1"
              value={filters.minStock ?? ""}
              onChange={(e) => handleInput("minStock", e.target.value)}
            />
          </Field>

          <Field>
            <Label>Max Stock</Label>
            <Input
              type="number"
              min="0"
              step="1"
              value={filters.maxStock ?? ""}
              onChange={(e) => handleInput("maxStock", e.target.value)}
            />
          </Field>
        </>
      )}

      {variant === "customers" && (
        <>
          <Field>
            <Label>{t("advanced_search.email")}</Label>
            <Input
              value={filters.email ?? ""}
              onChange={(e) => handleInput("email", e.target.value)}
            />
          </Field>
          <Field>
            <Label>{t("advanced_search.phone")}</Label>
            <Input
              value={filters.phone ?? ""}
              onChange={(e) => handleInput("phone", e.target.value)}
            />
          </Field>
          <Field>
            <Label>{t("advanced_search.address")}</Label>
            <Input
              value={filters.address ?? ""}
              onChange={(e) => handleInput("address", e.target.value)}
            />
          </Field>
          <Field>
            <Label>{t("advanced_search.created_after")}</Label>
            <Input
              type="date"
              value={filters.startDate ?? ""}
              onChange={(e) => handleInput("startDate", e.target.value)}
            />
          </Field>
          <Field>
            <Label>{t("advanced_search.created_before")}</Label>
            <Input
              type="date"
              value={filters.endDate ?? ""}
              onChange={(e) => handleInput("endDate", e.target.value)}
            />
          </Field>
        </>
      )}

      {variant === "orders" && (
        <>
          <Field>
            <Label>Order ID or Customer Name</Label>
            <Input
              value={filters.orderId ?? filters.customerName ?? ""}
              onChange={(e) => {
                handleInput("orderId", e.target.value);
                handleInput("customerName", e.target.value);
              }}
              placeholder="Order # or customer"
            />
          </Field>
          <Field>
            <Label>Status</Label>
            <Select
              value={filters.status ?? ""}
              onChange={(e) => handleInput("status", e.target.value)}
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </Select>
          </Field>
          <Field>
            <Label>Branch</Label>
            <Select
              value={filters.branchId ?? ""}
              onChange={(e) => handleInput("branchId", e.target.value)}
            >
              <option value="">All Branches</option>
              {branches.map((branch) => (
                <option key={branch.branchid} value={branch.branchid}>
                  {branch.name}
                </option>
              ))}
            </Select>
          </Field>
          <Field>
            <Label>Min Total (BHD)</Label>
            <Input
              type="number"
              min="0"
              step="0.001"
              value={filters.minTotal ?? ""}
              onChange={(e) => handleInput("minTotal", e.target.value)}
            />
          </Field>
          <Field>
            <Label>Max Total (BHD)</Label>
            <Input
              type="number"
              min="0"
              step="0.001"
              value={filters.maxTotal ?? ""}
              onChange={(e) => handleInput("maxTotal", e.target.value)}
            />
          </Field>
          <Field>
            <Label>From Date</Label>
            <DateWrap>
              <Input
                type="date"
                value={filters.startDate ?? ""}
                onChange={(e) => handleInput("startDate", e.target.value)}
              />
              <CalendarIcon aria-hidden />
            </DateWrap>
          </Field>
          <Field>
            <Label>To Date</Label>
            <DateWrap>
              <Input
                type="date"
                value={filters.endDate ?? ""}
                onChange={(e) => handleInput("endDate", e.target.value)}
              />
              <CalendarIcon aria-hidden />
            </DateWrap>
          </Field>
        </>
      )}

      <Actions>
        {onClose && (
          <SecondaryButton onClick={onClose}>
            <HiOutlineX /> {t("advanced_search.close")}
          </SecondaryButton>
        )}
        <SecondaryButton onClick={handleReset}>
          <HiOutlineX /> {t("advanced_search.clear_filters")}
        </SecondaryButton>
        <Button onClick={handleApply}>
          <HiOutlineSearch /> {t("advanced_search.apply_filters")}
        </Button>
      </Actions>
    </Container>
  );
}
