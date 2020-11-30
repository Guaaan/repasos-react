import { useState } from 'react';
import './App.css';
import CarouselComponent from './components/carousel';
import FormAdd from './components/form.add';
import Menu from './components/menu';
import MenuItem from './components/menu/menu-item';
import MenuLink from './components/menu/menu-link';

function App() {
  const [gallery, setGallery] = useState([
    { url: 'https://picsum.photos/id/688/1280/768', alt: 'Imagen 1', className: 'd-block w-100', active: true },
    { url: 'https://picsum.photos/id/237/1280/768', alt: 'Imagen 2', className: 'd-block w-100', active: false },
    { url: 'https://picsum.photos/id/900/1280/768', alt: 'Imagen 3', className: 'd-block w-100', active: false },
  ]);

  const [image, setImage] = useState({
    url: '',
    alt: '',
    className: '',
    active: false
  });

  const [links, setLinks] = useState([
    { id: 1, url: 'https://google.co/', label: 'Google', active: true },
    { id: 2, url: 'https://facebook.com/', label: 'Facebook', active: false },
    { id: 3, url: 'https://twitter.com/', label: 'Twitter', active: false },
  ])

  const inputGalleryForm = e => {
    setImage({
      ...image,
      [e.target.name]: e.target.value
    })
  }
  const submitGalleryForm = e => {
    e.preventDefault();
    setGallery([...gallery, image]);
  }

  return (
    <>
      <Menu>
        {
          links.length > 0 &&
          links.map(({ url, active, label }, index) => {
            return (
              <MenuItem key={index}>
                <MenuLink url={url} active={active}>
                  {label}
                </MenuLink>
              </MenuItem>
            )
          })
        }
      </Menu>
      <CarouselComponent gallery={gallery} />
      <FormAdd inputGalleryForm={inputGalleryForm} submitGalleryForm={submitGalleryForm} />
    </>
  );
}

export default App;
