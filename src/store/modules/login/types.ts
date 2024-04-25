export type modeOptions = "default" | "phone" | "qrcode" | "reset" | "register";

export interface DefaultLoginDataProps {
  username: string;
  password: string;
  isRemember: boolean;
}

export interface ResetDataProps {
  username: string;
  phone: string;
  code: string;
}

export interface RegisterDataProps {
  username: string;
  phone: string;
  code: string;
  password: string;
  repassword: string;
  isAgree: boolean;
}

export interface PhoneLoginDataProps {
  phone: string;
  code: string;
}
