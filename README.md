# camninh.com

Website giới thiệu Công ty TNHH Cam Ninh, song ngữ Việt (`/`) và Anh (`/en/`). Next.js 16 (static export) + Tailwind CSS 4, deploy lên GitHub Pages.

```bash
npm install
npm run dev       # http://localhost:3100
npm run build     # xuất site tĩnh ra ./out
npm run preview   # xem thử ./out
```

- Nội dung: `content/dictionaries/` (vi.ts, en.ts) và `content/data/`. Thông tin công ty chỉ sửa ở `content/data/site.ts`.
- Form báo giá: điền access key Web3Forms vào `.env.production` (`NEXT_PUBLIC_WEB3FORMS_KEY`). Khi chưa có key, form mở email soạn sẵn.
- Hình ảnh được tạo từ hồ sơ năng lực PDF bằng `scripts/` (xem `CLAUDE.md`).
- Push lên `main` sẽ tự động deploy production.
