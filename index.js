import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

// Array to store all blog posts
let blogs = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("homepage.ejs", { blogs: blogs });
});

app.get('/adding', (req, res) => {
  res.render("adding.ejs");
});

app.get('/about', (req, res) => {
  res.render("about.ejs");
});

app.get('/contact', (req, res) => {
  res.render("contact.ejs");
});

app.post('/submit', (req, res) => {
  // Add new blog to the array
  const newBlog = {
    id: Date.now(), // Simple ID generation
    title: req.body.title,
    content: req.body.content,
    date: new Date().toLocaleDateString()
  };
  
  blogs.push(newBlog);
  
  // Redirect to homepage to show all blogs
  res.redirect('/');
});

// Route to display edit form
app.get('/edit/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === blogId);
  
  if (blog) {
    res.render("edit.ejs", { blog: blog });
  } else {
    res.redirect('/');
  }
});

// Route to handle edit form submission
app.post('/edit/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blogIndex = blogs.findIndex(b => b.id === blogId);
  
  if (blogIndex !== -1) {
    // Update the blog post
    blogs[blogIndex] = {
      ...blogs[blogIndex],
      title: req.body.title,
      content: req.body.content,
      date: new Date().toLocaleDateString() + ' (edited)'
    };
  }
  
  res.redirect('/');
});

// Route to delete a blog post
app.post('/delete/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  blogs = blogs.filter(b => b.id !== blogId);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});