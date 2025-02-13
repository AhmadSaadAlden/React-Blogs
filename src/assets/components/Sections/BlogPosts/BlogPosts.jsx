import './BlogPosts.css'
import BlogPostsTitle from '../../BlogPostsTitle/BlogPostsTitle'
import Card from '../../Card/Card'
import DataBlogPostsCard from '../../../Data/DataBlogPostsCard/DataBlogPostsCard'

const BlogPosts = () => {
  return (
    <div className='BlogPosts'>
      <BlogPostsTitle  title = "All Blog Posts" />
      <div className="cards-group">
          {DataBlogPostsCard?.map((card , index) => {
            return (
              <Card 
              key={index}
              img={card.img}
              alt={card.alt}
              NameAndDateOfBirth={card.NameAndDateOfBirth}
              title={card.title}
              icon={card.icon}
              descrption={card.descrption}
              />
            )
          })}
      </div>
    </div>
  )
}

export default BlogPosts
