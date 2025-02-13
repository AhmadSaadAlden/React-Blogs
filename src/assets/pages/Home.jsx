import Hero from "../components/Sections/Hero/Hero"
import Container from "../components/Container/Container"
import BlogPostsTitle from "../components/BlogPostsTitle/BlogPostsTitle"
import BlogPosts from "../components/Sections/BlogPosts/BlogPosts"
import Card from "../components/Card/Card"


const Home = () => {
    const navItem = [
        {
          href : "#",
          content : "Home"
        },
        {
          href : "#",
          content : "About"
        }
      ]

  return (
    <>
      <Container>
            <Hero title="Stories and interviews" description="Subscribe to learn about new product features, the latest in technology, solutions, and updates." placeholder= "Enter your email" />
            <BlogPosts>
              <BlogPostsTitle />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </BlogPosts>
      </Container>
    </>
  )
}

export default Home
