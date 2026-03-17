export interface EBook {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  downloadUrl: string;
  fileName: string;
  categoryId: string;
  createdAt: string;
  // Store file as base64 for direct uploads
  fileData?: string;
  fileSize?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface PaymentSettings {
  upiId: string;
  qrCodeUrl: string;
  merchantName: string;
  // Custom QR code image upload
  customQrCode?: string;
}

export interface Purchase {
  bookId: string;
  transactionId: string;
  paidAt: string;
  amount: number;
}

export interface SiteSettings {
  logoUrl: string;
  siteName: string;
  adminPassword: string;
}
