import { Button } from '../../../../components/ui/button';
import {
  BookOpen,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  Search,
  User,
  Bell,
  Settings,
  PenTool,
} from 'lucide-react';
import { Badge } from '../../../../components/ui/badge';

const BlogPlatform = () => {
  const featuredPost = {
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development...",
    author: "Sarah Johnson",
    date: "Dec 19, 2023",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Future"],
    image: "https://placehold.co/800x400/2563eb/ffffff?text=Featured+Post"
  };

  const recentPosts = [
    {
      title: "Getting Started with TypeScript",
      excerpt: "A comprehensive guide to TypeScript for JavaScript developers...",
      author: "Mike Chen",
      date: "Dec 18, 2023",
      readTime: "4 min read",
      image: "https://placehold.co/400x300/2563eb/ffffff?text=TypeScript"
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Deep dive into React Hooks and how to use them effectively...",
      author: "Emma Wilson",
      date: "Dec 17, 2023",
      readTime: "6 min read",
      image: "https://placehold.co/400x300/2563eb/ffffff?text=React+Hooks"
    },
    {
      title: "The Art of Clean Code",
      excerpt: "Best practices for writing maintainable and scalable code...",
      author: "David Brown",
      date: "Dec 16, 2023",
      readTime: "7 min read",
      image: "https://placehold.co/400x300/2563eb/ffffff?text=Clean+Code"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">DevBlog</h1>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-foreground/80 hover:text-foreground">Home</a>
                <a href="#" className="flex items-center space-x-2 text-foreground/80 hover:text-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Articles</span>
                </a>
                <a href="#" className="text-foreground/80 hover:text-foreground">Categories</a>
                <a href="#" className="text-foreground/80 hover:text-foreground">About</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="default">
                <PenTool className="h-5 w-5 mr-2" />
                Write
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Featured Post */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Featured Post</Badge>
              <h2 className="text-4xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://placehold.co/40x40/2563eb/ffffff?text=SJ"
                  alt={featuredPost.author}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{featuredPost.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {featuredPost.date} · {featuredPost.readTime}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Recent Posts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.title} className="group">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={`https://placehold.co/32x32/2563eb/ffffff?text=${post.author.split(' ')[0][0]}${post.author.split(' ')[1][0]}`}
                      alt={post.author}
                      className="rounded-full w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.date} · {post.readTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                      <button className="flex items-center space-x-1 hover:text-foreground">
                        <MessageCircle className="h-4 w-4" />
                        <span>12</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-foreground">
                        <Heart className="h-4 w-4" />
                        <span>48</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-foreground">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Web Development", count: 128 },
              { name: "UI/UX Design", count: 85 },
              { name: "Mobile Development", count: 64 },
              { name: "DevOps", count: 42 },
              { name: "Machine Learning", count: 56 },
              { name: "Cloud Computing", count: 73 },
              { name: "Cybersecurity", count: 39 },
              { name: "Blockchain", count: 27 }
            ].map((category) => (
              <div
                key={category.name}
                className="p-4 rounded-lg bg-card hover:bg-accent/20 transition-colors cursor-pointer"
              >
                <h4 className="font-medium mb-1">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPlatform;
