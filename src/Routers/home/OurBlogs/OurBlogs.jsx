import './OurBlogs.css'

import imgPosteUm from '../../../assets/OurBlogsImg/Image-post-1.jpg'
import imgPosteDois from '../../../assets/OurBlogsImg/Image-post-2.jpg'
import imgPosteTres from '../../../assets/OurBlogsImg/Image-post-3.jpg'
import imgPosteQuatro from '../../../assets/OurBlogsImg/Image-post-4.jpg'
// imgs perfil
import perfilUm from '../../../assets/OurBlogsImg/prefilOurBlogs/Image-perfil-1.jpg'
import perfilDois from '../../../assets/OurBlogsImg/prefilOurBlogs/Image-perfil-2.jpg'
import perfilTres from '../../../assets/OurBlogsImg/prefilOurBlogs/Image-perfil-3.jpg'
import perfilQuatr from '../../../assets/OurBlogsImg/prefilOurBlogs/Image-perfil-4.jpg'

// Icons
import { FaRegHeart } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";



const OurBlogsPost = [
  {
    id: 1,
    img: imgPosteUm,
    span: 'Weight Loss',
    title: 'The Benefits of Hydration for Weight Loss',
    descrition: 'Discover how staying hydrated can support your weight loss goals and improve overall health.',
    perfl: [{
      id: 12,
      img: perfilUm,
      nome: 'Emily Johson',
    }]
  },

  {
    id: 2,
    img: imgPosteDois,
    span: 'Mindful Eating',
    title: 'Cultivating a Healthy Relationship with Food',
    descrition: 'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
    perfl: [{
      id: 13,
      img: perfilDois,
      nome: 'Sarah Thompson',
    }]
  },
  {
    id: 3,
    img: imgPosteTres,
    span: 'Understanding Macronutrients',
    title: 'Carbohydrates, Proteins, and Fats',
    descrition: 'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
    perfl: [{
      id: 14,
      img: perfilTres,
      nome: 'Mark Wilson',
    }]
  },
  {
    id: 4,
    img: imgPosteQuatro,
    span: 'Healthy Snacks on the Go',
    title: 'Quick and Nutritious Options',
    descrition: 'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
    perfl: [{
      id: 15,
      img: perfilQuatr,
      nome: 'Fabiana Solsa',
    }]
  },
]

const OurBlogs = () => {
  return (
    <div className='main-OurBlogs'>
      <div className="OurBlogs">

        <div className="OurBlogs-header">
          <div className="Blogs-title">
            <h1>Our Blogs</h1>
            <p>Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here´s what you can expect from our blog.</p>
          </div>
        </div>


        <div className="OurBlogs-cart">
          <ul className='list-de-cart-Blogs'>
            {OurBlogsPost.map((post) => (
              <li key={post.id} className='post-cart'>
                <div className="post-img">
                  <img src={post.img} alt="" />
                </div>
                <div className="post-title-descrition">
                  <div className="post-title">
                    <span>{post.span}</span>
                    <h2>{post.title}</h2>
                  </div>

                  <div className="post-descrition">
                    <p>{post.descrition}</p>
                  </div>

                  <div className="cart-post-perfil">
                    {post.perfl.map((item) => (

                      <div key={item.id} className="post-perfil">
                        <div className="post-perfil-info">
                          <div className="perfil-img">
                            <img src={item.img} />
                          </div>

                          <div className="perfil-name">
                            <h3>{item.nome}</h3>
                            <span>23 May 2023 - 5 min read</span>
                          </div>

                        </div>

                        <div className="post-perfil-icons">
                          <div className='icons-like icons-post'>
                            <FaRegHeart />
                          </div>
                          <div className='icons-saved icons-post'>
                          <MdSaveAlt />
                          </div>
                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>

    </div>
  )
}

export default OurBlogs