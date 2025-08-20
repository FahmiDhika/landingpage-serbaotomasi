import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jam Waktu Shalat | Serba Otomasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
