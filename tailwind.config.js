/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerRadial: 'radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2))',
        sanpham: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/Sản_phẩm.jpg)',
        trangchu: ' url(/images/Banner/Trang_chủ_2.jpg)',
        huong: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/Hương.jpg)',
        nen: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/Nến.jpg)',
        tienvang: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/Tiền_vàng.jpg)',
        setdocung: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/Set_đồ_cúng.jpg)',
        dohau: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/Đồ_hầu.jpg)',
        sanphamkhac: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/Sản_phẩm_khác.jpg)',
        tintucsukien: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/TinTucSuKien.png)',
        lienhe: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/LienHe.jpg)',
        gioithieu: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/GioiThieu.png)',
        thongdiep: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(/images/Banner/OutQuote.jpg)'
      },
      screens: {
        'phone': '390px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
};
