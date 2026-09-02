import locked_phone from "../../../public/vectors/phone_locked.svg";
import biometric_login from "../../../public/vectors/biometric_login.svg";
import generated_password from "../../../public/vectors/generated_password.svg";
import more_data from "../../../public/vectors/more_data.svg";

type OnboardingSlide = {
    id: string;
    headline: string;
    body: string;
    visual?: any;
};

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
    {
        id: "local-storage",
        headline: "Your passwords. Your device. Nobody else.",
        body: "Passw stores everything locally, encrypted, and never sent to a server.",
        visual: locked_phone,
    },
    {
        id: "biometric-unlock",
        headline: "Unlock in a glance.",
        body: "Use Face ID or your fingerprint to get into your vault instantly — your master password is always there as backup.",
        visual: biometric_login,
    },
    {
        id: "password-generator",
        headline: "Never reuse a password again.",
        body: "Generate strong, unique passwords in one tap — right when you need them.",
        visual: generated_password,
    },
    {
        id: "secure-notes",
        headline: "More than just passwords.",
        body: "Store notes, PINs, and security answers alongside each entry — everything about an account, in one place.",
        visual: more_data,
    },
];