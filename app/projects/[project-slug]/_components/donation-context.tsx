"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type PaymentStatus = "idle" | "loading" | "success";

interface DonationContextValue {
  /** Selected amount (preset or custom). null while user is typing custom. */
  amount: number | null;
  /** Raw custom-input string (for controlled input). */
  customAmount: string;
  /** Whether the current amount comes from the custom input vs a preset. */
  isCustom: boolean;
  /** Modal open state — used on mobile when sticky aside is hidden. */
  modalOpen: boolean;
  /** Optimistic stats: raised total + donor count after a successful gift. */
  raisedDelta: number;
  donorDelta: number;
  /** Payment flow state for the give button. */
  paymentStatus: PaymentStatus;

  selectAmount: (amount: number) => void;
  setCustomAmount: (raw: string) => void;
  openModal: () => void;
  closeModal: () => void;
  submitDonation: () => Promise<void>;
  resetPayment: () => void;
}

const DonationContext = createContext<DonationContextValue | null>(null);

interface DonationProviderProps {
  children: ReactNode;
  defaultAmount: number;
}

export function DonationProvider({
  children,
  defaultAmount,
}: DonationProviderProps) {
  const [amount, setAmount] = useState<number | null>(defaultAmount);
  const [customAmount, setCustomAmountState] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [raisedDelta, setRaisedDelta] = useState(0);
  const [donorDelta, setDonorDelta] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");

  const selectAmount = useCallback((next: number) => {
    setAmount(next);
    setCustomAmountState("");
    setIsCustom(false);
  }, []);

  const setCustomAmount = useCallback((raw: string) => {
    // Allow digits and a single decimal point.
    const cleaned = raw.replace(/[^\d.]/g, "");
    setCustomAmountState(cleaned);
    setIsCustom(true);
    const parsed = parseFloat(cleaned);
    setAmount(Number.isFinite(parsed) && parsed > 0 ? parsed : null);
  }, []);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const submitDonation = useCallback(async () => {
    if (!amount || amount <= 0) return;
    setPaymentStatus("loading");
    // Simulated payment — client wires real gateway later.
    console.log("[donation] onSelect →", { amount });
    await new Promise((r) => setTimeout(r, 1200));
    setRaisedDelta((d) => d + amount);
    setDonorDelta((d) => d + 1);
    setPaymentStatus("success");
  }, [amount]);

  const resetPayment = useCallback(() => {
    setPaymentStatus("idle");
  }, []);

  const value = useMemo<DonationContextValue>(
    () => ({
      amount,
      customAmount,
      isCustom,
      modalOpen,
      raisedDelta,
      donorDelta,
      paymentStatus,
      selectAmount,
      setCustomAmount,
      openModal,
      closeModal,
      submitDonation,
      resetPayment,
    }),
    [
      amount,
      customAmount,
      isCustom,
      modalOpen,
      raisedDelta,
      donorDelta,
      paymentStatus,
      selectAmount,
      setCustomAmount,
      openModal,
      closeModal,
      submitDonation,
      resetPayment,
    ]
  );

  return (
    <DonationContext.Provider value={value}>
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation(): DonationContextValue {
  const ctx = useContext(DonationContext);
  if (!ctx) {
    throw new Error("useDonation must be used inside DonationProvider");
  }
  return ctx;
}
