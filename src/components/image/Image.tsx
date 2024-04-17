import React, { useState, useCallback, useEffect } from "react"
import projectIcon1 from "src/assets/images/project/ninga-image.png"

interface ImgProfileProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  path: string
  loadError?: string
}

const ImgProfile: React.FC<ImgProfileProps> = ({ path, loadError = projectIcon1, ...props }) => {
  const [img, setImg] = useState<string>(path)

  const onLoad = useCallback(() => {
    setImg(path)
  }, [path])

  const onError = useCallback(() => {
    setImg(loadError)
  }, [loadError])

  useEffect(() => {
    const imageObj = new Image()
    imageObj.src = path
    imageObj.addEventListener("load", onLoad)
    imageObj.addEventListener("error", onError)

    return () => {
      imageObj.removeEventListener("load", onLoad)
      imageObj.removeEventListener("error", onError)
    }
  }, [path, onLoad, onError])

  return <img {...props} alt={img} src={img} />
}

export default ImgProfile
