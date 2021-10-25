import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface PropsImage {
	className?: string
	src: string
	alt: string
}

const Image = ({ className, src, alt }: PropsImage) => {
	return (
		<figure className={className}>
			<LazyLoadImage
				effect='blur'
				src={src}
				alt={alt}
				height='100%'
				width='100%'
				style={{ objectFit: 'cover' }}
			/>
		</figure>
	)
}

export default Image
