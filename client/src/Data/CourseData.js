const SearchData = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    desc: "This course provides a comprehensive introduction to the fascinating field of machine learning. Explore the core concepts and algorithms that power artificial intelligence and discover how machines can learn from data. Taught by John Smith.",
    author: "John Smith",
    image: "https://via.placeholder.com/250x150?text=Machine+Learning",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 1,
  },
  {
    id: 2,
    title: "Data Science for Beginners",
    desc: "Join Alice Johnson on a journey into the world of data science. Learn the fundamentals of data analysis, visualization, and statistical modeling. Perfect for beginners looking to dive into data-driven insights.",
    author: "Alice Johnson",
    image: "https://via.placeholder.com/250x150?text=Data+Science",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 2,
  },
  {
    id: 3,
    title: "Advanced Data Structures",
    desc: "David Brown guides you through advanced data structures, essential for efficient programming and problem-solving. Delve into trees, graphs, and more to take your coding skills to the next level.",
    author: "David Brown",
    image: "https://via.placeholder.com/250x150?text=Data+Structures",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 3,
  },
  {
    id: 4,
    title: "Deep Learning Fundamentals",
    desc: "Uncover the foundations of deep learning with Emily Wilson. This course explores neural networks, deep neural architectures, and their applications. Get ready to dive deep into artificial intelligence.",
    author: "Emily Wilson",
    image: "https://via.placeholder.com/250x150?text=Deep+Learning",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 4,
  },
  {
    id: 5,
    title: "Big Data Analytics",
    desc: "Sarah Lee takes you on a journey through the world of big data analytics. Learn how to process and analyze massive datasets to extract valuable insights for decision-making.",
    author: "Sarah Lee",
    image: "https://via.placeholder.com/250x150?text=Big+Data",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 5,
  },
  {
    id: 6,
    title: "Web Development with JavaScript",
    desc: "Master the art of web development with JavaScript. Michael Clark's course covers front-end and back-end web technologies, giving you the skills to build interactive and dynamic websites.",
    author: "Michael Clark",
    image: "https://via.placeholder.com/250x150?text=Web+Development",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 6,
  },
  {
    id: 7,
    title: "Database Management Systems",
    desc: "Explore the world of database management with Sophia Rodriguez. Learn how to design, implement, and manage databases efficiently, crucial for applications and businesses.",
    author: "Sophia Rodriguez",
    image: "https://via.placeholder.com/250x150?text=Database+Management",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 7,
  },
  {
    id: 8,
    title: "Computer Networks and Security",
    desc: "Daniel Martin leads a comprehensive course on computer networks and security. Understand network protocols, security measures, and best practices to protect digital assets.",
    author: "Daniel Martin",
    image: "https://via.placeholder.com/250x150?text=Networking+Security",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 8,
  },
  {
    id: 9,
    title: "Artificial Intelligence Applications",
    desc: "Discover real-world applications of artificial intelligence with Olivia Davis. Learn how AI is transforming industries and solving complex problems across various domains.",
    author: "Olivia Davis",
    image: "https://via.placeholder.com/250x150?text=AI+Applications",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 9,
  },
  {
    id: 10,
    title: "Software Engineering Principles",
    desc: "William Smith introduces software engineering principles essential for building robust and scalable software solutions. Gain a strong foundation in the art of software development.",
    author: "William Smith",
    image: "https://via.placeholder.com/250x150?text=Software+Engineering",
    likes: Math.floor(Math.random() * 100),
    isLiked: true,
    dislikes: Math.floor(Math.random() * 20),
    isDisliked: false,
    isBookmarked: true,
    duration: `${Math.floor(Math.random() * 40) + 1}hr ${Math.floor(
      Math.random() * 60
    )}min`,
    views: Math.floor(Math.random() * 10000),
    watchPercentage: Math.floor(Math.random() * 100) + 1,
    PlayListId: 10,
  },
];

export default SearchData;
