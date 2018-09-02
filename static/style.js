export default `body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, Sans-Serif, sans-serif;
  background: white;
}

.title {
  padding: 2px;
  text-overflow-ellipsis: overflow;
  overflow: hidden;
  display: block;
}

.selected-image, .select-video {
  height: 500px;
}

.selected-image img, .select-video video {
  width: 100%;
  height: 450px;
}

.image-thumbnail, .video-thumbnail {
  display: flex;
  justify-content: space-around;
  overflow: auto;
  overflow-y: hidden;
}

.image-thumbnail img, .video-thumbnail video {
  width: 70px;
  height: 70px;
  padding: 1px;
  border: 1px solid grey;
}
`