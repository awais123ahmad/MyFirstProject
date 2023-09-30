import React from 'react'
import Layout from '../components/Layout'
import edit from '../assets/pencil.png'
import delete1 from '../assets/delete-1.png'
import '../css/Categories.css'
import { Router, useNavigate } from 'react-router-dom'
import AddCategory from './AddCategory'
// edit delete and active

const Categories = () => {

  const Router = useNavigate();

  return (
    <Layout>
      <div class="header">
        <div class="header-h1">
          <h1>Category</h1>
        </div>
        <div className="location-searchbox">
          <input type="text" className="location-search-input" placeholder="Search..." />
          <button onClick={() => Router('/addcategories')} className="location-search-btn">Add</button>
        </div>
        <div class="container">
          <div class="category">
            <div class="category-item">
              <img src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?w=996&t=st=1693224615~exp=1693225215~hmac=19df39559f2e161f8a30ea00a1430dbc1c7c37e99fd3f8fa8ef4a0c0d0932c17" alt="Weddings" />
              <div class="category-content">
                <h2 class="category-title">Weddings</h2>
                <p class="category-description">Find the perfect venue for your dream wedding.</p>
                <img class="icon-small" style={{ width: 20, height: 20 }} src={edit} alt="edit" /> ㅤㅤ<img class="icon-small" style={{ width: 20, height: 20 }} src={delete1} alt="edit" />
                <div class="switch">
                  <input type="checkbox" class="switch-input" id="switch" />
                  <label for="switch" class="switch-label">
                    <span class="switch-inner"></span>
                    <span class="switch-switch"></span>
                  </label>
                </div>

              </div>
            </div>
            <div class="category-item">
              <img src="https://img.freepik.com/free-photo/beautiful-wedding-flower_1232-3075.jpg?w=996&t=st=1693224640~exp=1693225240~hmac=ef994c9f27f97966afbb2c36331433c329004e587168fa714d1b673f4f89854b" alt="Corporate Events" />
              <div class="category-content">
                <h2 class="category-title">Corporate Events</h2>
                <p class="category-description">Explore venues for your company's conferences and meetings.</p>
                <img class="icon-small" style={{ width: 20, height: 20 }} src={edit} alt="edit" /> ㅤㅤ<img class="icon-small" style={{ width: 20, height: 20 }} src={delete1} alt="edit" />
                <div class="switch">
                  <input type="checkbox" class="switch-input" id="switch" />
                  <label for="switch" class="switch-label">
                    <span class="switch-inner"></span>
                    <span class="switch-switch"></span>
                  </label>
                </div>

              </div>
            </div>
            <div class="category-item">
              <img src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?w=996&t=st=1693224615~exp=1693225215~hmac=19df39559f2e161f8a30ea00a1430dbc1c7c37e99fd3f8fa8ef4a0c0d0932c17" alt="Parties" />
              <div class="category-content">
                <h2 class="category-title">Parties</h2>
                <p class="category-description">Discover venues to host memorable parties and celebrations.</p>
                <img class="icon-small" style={{ width: 20, height: 20 }} src={edit} alt="edit" /> ㅤㅤ<img class="icon-small" style={{ width: 20, height: 20 }} src={delete1} alt="edit" />ㅤㅤ
                <div class="switch">
                  <input type="checkbox" class="switch-input" id="switch" />
                  <label for="switch" class="switch-label">
                    <span class="switch-inner"></span>
                    <span class="switch-switch"></span>
                  </label>
                </div>

              </div>
            </div>
            <div class="category-item">
              <img src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?w=996&t=st=1693224615~exp=1693225215~hmac=19df39559f2e161f8a30ea00a1430dbc1c7c37e99fd3f8fa8ef4a0c0d0932c17" alt="Parties" />
              <div class="category-content">
                <h2 class="category-title">Parties</h2>
                <p class="category-description">Discover venues to host memorable parties and celebrations.</p>
                <img class="icon-small" style={{ width: 20, height: 20 }} src={edit} alt="edit" /> ㅤㅤ<img class="icon-small" style={{ width: 20, height: 20 }} src={delete1} alt="edit" />
                <div class="switch">
                  <input type="checkbox" class="switch-input" id="switch" />
                  <label for="switch" class="switch-label">
                    <span class="switch-inner"></span>
                    <span class="switch-switch"></span>
                  </label>
                </div>

              </div>
            </div>
            <div class="category-item">
              <img src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?w=996&t=st=1693224615~exp=1693225215~hmac=19df39559f2e161f8a30ea00a1430dbc1c7c37e99fd3f8fa8ef4a0c0d0932c17" alt="Parties" />
              <div class="category-content">
                <h2 class="category-title">Parties</h2>
                <p class="category-description">Discover venues to host memorable parties and celebrations.</p>
                <img class="icon-small" style={{ width: 20, height: 20 }} src={edit} alt="edit" /> ㅤㅤ<img class="icon-small" style={{ width: 20, height: 20 }} src={delete1} alt="edit" />
                <div class="switch">
                  <input type="checkbox" class="switch-input" id="switch" />
                  <label for="switch" class="switch-label">
                    <span class="switch-inner"></span>
                    <span class="switch-switch"></span>
                  </label>
                </div>

              </div>
            </div>
            <div class="category-item">
              <img src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?w=996&t=st=1693224615~exp=1693225215~hmac=19df39559f2e161f8a30ea00a1430dbc1c7c37e99fd3f8fa8ef4a0c0d0932c17" alt="Parties" />
              <div class="category-content">
                <h2 class="category-title">Parties</h2>
                <p class="category-description">Discover venues to host memorable parties and celebrations.</p>
                <img class="icon-small" style={{ width: 20, height: 20 }} src={edit} alt="edit" /> ㅤㅤ<img class="icon-small" style={{ width: 20, height: 20 }} src={delete1} alt="edit" />
                <div class="switch">
                  <input type="checkbox" class="switch-input" id="switch" />
                  <label for="switch" class="switch-label">
                    <span class="switch-inner"></span>
                    <span class="switch-switch"></span>
                  </label>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Categories