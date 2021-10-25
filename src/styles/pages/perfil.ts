import styled from 'styled-components'

export const PerfilWrapper = styled.section`
	width: 100%;
	form {
		margin-top: 2rem;
	}
`

export const SectionSubTitle = styled.h3`
	color: var(--color-main);
	font-weight: 500;
	font-size: 2rem;
	margin-top: 3rem;
`
export const ChangeImage = styled.div`
	height: 20rem;
	width: 20rem;
	border-radius: 50%;
	border: 0.1rem solid #505050;
	overflow: hidden;
	margin-top: 2rem;
	position: relative;
	figure {
		width: 100%;
		height: 100%;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	button {
		position: absolute;
		z-index: 1;
		bottom: 0;
		background: #b1040ea9;
	}
	input[type='file'] {
		display: none;
	}
`
