export type User = {
  id: number;
  email: string;
  password: string;
  birthday: Date;
  name: string;
  profile_picture_url?: string;
  phone_number?: string;
  is_active?: boolean;
  confirm_password: string;
  terms: boolean;
};
