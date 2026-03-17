# E-Book Files Directory

Place your PDF e-book files in this directory.

## How to Add Books:

1. Upload your PDF files to this `public/books/` folder
2. In the Admin panel, when adding a new book:
   - Set the Download URL to: `/books/your-filename.pdf`
   - Set the File Name to: `your-filename.pdf`

## Example:
If you upload a file called `my-romantic-novel.pdf`, then:
- Download URL: `/books/my-romantic-novel.pdf`
- File Name: `my-romantic-novel.pdf`

## Supported Formats:
- PDF (recommended)
- EPUB
- MOBI

Note: For production deployment, ensure your server is configured to serve these files correctly.
