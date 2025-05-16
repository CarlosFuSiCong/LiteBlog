import data from '/data/db.json'
import { Profile } from '@/js/components/mainLeft/profile';
// import { Sidebar } from '@/js/components/mainLeft/sidebar';
// import { create_post } from '@/js/components/mainLeft/createPost';

/* --- Navbar --- */
export const navbar = document.querySelector("nav");
export const navbar_container = navbar.querySelector(".container");
export const navbar_container_logo = navbar_container.querySelector('.logo');
export const navbar_container_searchBar = navbar_container.querySelector(".search-bar")
export const navbar_container_create = navbar_container.querySelector(".create")
export const navbar_container_create_img = navbar_container.querySelector("img")

/* --- Main --- */
export const main = document.querySelector("main");
export const main_container = main.querySelector(".container");

/* --- Main Left --- */
export const left = main_container.querySelector('.main-left');
export const left_profile = new Profile(data.profile).dom;
// export const left_sidebar = new Sidebar(data.sidebar).dom;
// export const left_sidebar_post = create_post()