import FetchImages from "./FetchImages";
import ImageGalleryItem from "./ImageGalleryItem";
import Searchbar from "./Searchbar";

export const App = () => {
  return (
    <div
       style={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
      
    >
      <Searchbar /> 
      <div style={{ marginTop: 20 }}></div>
      <FetchImages />
      <ImageGalleryItem/>

      
    </div>
  );
};
