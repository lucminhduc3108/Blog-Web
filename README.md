# My Blog - Personal Blog Website

A simple and elegant personal blog website built with Node.js, Express, and EJS. Users can create, read, edit, and delete blog posts with a clean and responsive interface.

## ✨ Features

- **📝 Create Blog Posts** - Write and publish new blog posts
- **📖 View All Posts** - Browse all published blog posts on the homepage
- **✏️ Edit Posts** - Modify existing blog posts
- **🗑️ Delete Posts** - Remove unwanted blog posts with confirmation
- **📱 Responsive Design** - Works perfectly on desktop and mobile devices
- **🎨 Modern UI** - Clean card-based design with hover effects
- **📅 Timestamps** - Automatic date tracking for posts and edits

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd server_project
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
npm start
# or
node index.js
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
server_project/
├── public/
│   └── styles/
│       └── blog.css           # Blog styling
├── views/
│   ├── partials/
│   │   ├── header.ejs         # Header component
│   │   └── footer.ejs         # Footer component
│   ├── homepage.ejs           # Main blog listing page
│   ├── adding.ejs             # Create new blog post
│   ├── edit.ejs               # Edit existing post
│   ├── about.ejs              # About page
│   └── contact.ejs            # Contact page
├── index.js                   # Main server file
└── package.json
```

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Template Engine:** EJS (Embedded JavaScript)
- **Styling:** CSS3 with Grid and Flexbox
- **Data Storage:** In-memory array (for development)

## 📋 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Display all blog posts |
| GET | `/adding` | Show create post form |
| POST | `/submit` | Create new blog post |
| GET | `/edit/:id` | Show edit form for specific post |
| POST | `/edit/:id` | Update specific blog post |
| POST | `/delete/:id` | Delete specific blog post |
| GET | `/about` | About page |
| GET | `/contact` | Contact page |

## 💾 Data Structure

Each blog post is stored with the following structure:

```javascript
{
  id: 1640995200000,           // Timestamp ID
  title: "Author Name",        // Post author
  content: "Blog content...",  // Post content
  date: "1/1/2024"            // Creation/edit date
}
```

## 🎨 Features Overview

### Homepage
- Grid layout displaying all blog posts
- Responsive design (vertical on mobile, horizontal on desktop)
- Each post shows content, author, date, and action buttons

### Create Post
- Simple form with author name and content fields
- Automatic ID generation and date stamping
- Redirects to homepage after creation

### Edit Post
- Pre-populated form with existing post data
- Updates date with "(edited)" indicator
- Cancel option to discard changes

### Delete Post
- Confirmation dialog before deletion
- Permanent removal from the blog list

## 📱 Responsive Design

The blog uses a mobile-first approach:

- **Mobile (< 768px):** Single column layout
- **Desktop (≥ 768px):** Multi-column grid layout
- **Touch-friendly:** Large buttons and good spacing
- **Hover effects:** Enhanced interaction on desktop

## 🚧 Development Notes

- **Data Persistence:** Currently uses in-memory storage (data resets on server restart)
- **ID Generation:** Uses `Date.now()` for simple unique IDs
- **Error Handling:** Basic error handling with redirects
- **Security:** No authentication implemented (development only)

## 🔮 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Image upload support
- [ ] Categories and tags
- [ ] Search functionality
- [ ] Comments system
- [ ] Rich text editor
- [ ] SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Duc.LM** - Personal Blog Project

---

⭐ If you found this project helpful, please give it a star!
