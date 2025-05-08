import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "FNA Partners | Premier Accounting & Auditing Experts in UAE & Saudi Arabia",
  description: "FNA Partners provides end-to-end accounting, auditing, VAT & Zakat compliance, payroll outsourcing, and strategic financial advisory across the UAE and Saudi Arabia. Leverage 30 years of local & international expertise to streamline your finances and ensure full regulatory compliance ,FA Partners, best accounting services UAE, best accounting services United Arab Emirates,FA Partners, best accounting services Dubai,FA Partners, best accounting services Abu Dhabi, best accounting services Sharjah, best accounting services Ajman,FA Partners, best accounting services Ras Al Khaimah, best accounting services Fujairah, best accounting services Umm Al Quwain, best accounting services Saudi Arabia, best accounting services KSA, FA Partners,best accounting services Riyadh,FA Partners, best accounting services Jeddah, best accounting services Dammam, best accounting services Khobar, best accounting services Makkah, best accounting services Medina, best accounting services Al Khobar,FA Partners, top accounting services UAE, top accounting services United Arab Emirates, top accounting services Dubai, top accounting services Abu Dhabi, top accounting services Sharjah,FA Partners, top accounting services Ajman,FA Partners, top accounting services Ras Al Khaimah, best auditing services UAE, top bookkeeping services Dubai,FA Partners, trusted VAT compliance UAE,FA Partners, corporate tax planning, FA Partners,Zakat advisory,FA Partners, forensic accounting services, business advisory UAE, financial management solutions, FA Partners,payroll outsourcing services, tax consultancy,FA Partners, company formation services, FA Partners,SME accounting solutions,FA Partners, internal audit services, risk assessment,FA Partners,FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners.FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners.FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners.FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners.FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners, FA Partners,SME accounting solutions,FA Partners, internal audit services, risk assessment,FA Partners,FA Partners,.",
  verification: {
    google: 'TZ89ejM_sxVRK2qA9hr3WJltNpXaTCqbszybmjdsxaw',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin:0}}>
        {children}
      </body>
    </html>
  );
}
