import { useState } from "react";
import { workCategories, workProjects } from "../data/projects";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import { HiArrowTurnDownLeft } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import "./work.style.css";

// Jedna kategorija: naslov, strelica i fotografije.
const WorkCategory = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  console.log(selectedPhoto);

  // Uzmi samo fotografije ove kategorije.
  const photos = workProjects.filter((photo) => photo.category === category.id);

  // Zatvoreno: prvih 12. Otvoreno: sve.
  const visiblePhotos = isOpen ? photos : photos.slice(0, 12);

  const selectedIndex = photos.findIndex(
    (photo) => photo.id === selectedPhoto?.id,
  );

  const showNextPhoto = () => {
    let nextIndex = selectedIndex + 1;
    if (nextIndex > photos.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = nextIndex;
    }
    setSelectedPhoto(photos[nextIndex]);
  };

  return (
    <section className="work-category">
      <div className="work-category-header">
        <div className="work-title-holder">
          <h2>{category.title}</h2>
          <p>{category.subtitle}</p>
        </div>

        <button
          type="button"
          className="work-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`gallery-${category.id}`}
          aria-label={
            isOpen
              ? `Prikaži manje fotografija: ${category.title}`
              : `Prikaži sve fotografije: ${category.title}`
          }
        >
          <span aria-hidden="true">
            {isOpen ? (
              <HiArrowTurnDownLeft className="work-toggle-icon" />
            ) : (
              <HiArrowTurnRightDown className="work-toggle-icon" />
            )}
          </span>
        </button>
      </div>

      {selectedPhoto && (
        <div className="modal">
          <div className="modal-heading">
            <div className="modal-heading-text">
              {" "}
              <p className="cursor-hover">{category.title}</p>
              <span>
                {selectedIndex + 1} / {photos.length}
              </span>
            </div>

            <HiMiniXMark
              onClick={() => setSelectedPhoto(null)}
              className="modal-icon cursor-hover"
            />
          </div>
          {selectedPhoto.type === "video" ? (
            <video
              src={selectedPhoto.src}
              aria-label={selectedPhoto.alt}
              autoPlay
              playsInline
              preload="metadata"
              className="cursor-hover"
              onClick={showNextPhoto}
              disablePictureInPicture
            ></video>
          ) : (
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              loading="lazy"
              decoding="async"
              className="cursor-hover"
              onClick={showNextPhoto}
            />
          )}
        </div>
      )}

      {photos.length === 0 ? (
        <p className="work-empty">Uskoro.</p>
      ) : (
        <div
          id={`gallery-${category.id}`}
          className={`work-gallery ${isOpen ? "is-open" : ""}`}
        >
          {visiblePhotos.map((item) =>
            item.type === "video" ? (
              <button
                className="video-btn"
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
              >
                {" "}
                <video
                  key={item.id}
                  src={item.src}
                  aria-label={item.alt}
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  className="cursor-hover"
                ></video>
              </button>
            ) : (
              <button
                className="img-btn"
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
              >
                {" "}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="cursor-hover"
                />
              </button>
            ),
          )}
        </div>
      )}
    </section>
  );
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // All prikazuje sve kategorije.
  // Ostali filteri prikazuju samo izabranu kategoriju.
  const visibleCategories = workCategories.filter(
    (category) => activeCategory === "all" || category.id === activeCategory,
  );

  return (
    <section className="work-page about-page">
      <div className="work-section-holder">
        <div className="filter" role="group" aria-label="Kategorije radova">
          <button
            type="button"
            className={`work-label-holder ${
              activeCategory === "all" ? "active-label" : ""
            }`}
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
          >
            All
          </button>

          {workCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`work-label-holder ${
                activeCategory === category.id ? "active-label" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="work-holder">
          {visibleCategories.map((category) => (
            <WorkCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
