import "./index.css"
import { profile } from './data/db.json'

import {
  navbar_container_logo,
  navbar_container_create_img,
  left,
  left_profile,
  // left_sidebar,
  // left_sidebar_post
} from '@/js/common.js'

navbar_container_logo.textContent = "LiteBlog"
navbar_container_create_img.src = profile.img_src

left.appendChild(left_profile)
// left.appendChild(left_sidebar)
// left.appendChild(left_sidebar_post)