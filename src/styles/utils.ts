import styled from 'styled-components'

export const FormInput = styled.div`
	display: flex;
	flex-direction: column;
	label {
		display: block;
		margin-bottom: 1rem;
		font-weight: 400;
	}
	input,
	textarea {
		width: 100%;
		border: 0.1rem solid var(--color-com);
		background: transparent;
		height: 4rem;
		padding: 0 1rem;
	}
	textarea {
		height: 15rem;
	}
`
export const Button = styled.button`
	width: 100%;
	font-weight: 500;
	height: 4rem;
	display: grid;
	place-items: center;
	background: var(--color-main);
	color: var(--color-light);
`

export const ButtonMenu = styled.button`
	height: 5rem;
	width: 5rem;
	border-radius: 50%;
	background: var(--color-dark);
	box-shadow: var(--box-shadow);
	position: absolute;
	bottom: 2rem;
	right: 2rem;
	display: grid;
	place-items: center;
	z-index: 1;
	span svg {
		fill: var(--color-com);
		color: var(--color-com);
		height: 4rem;
		width: 4rem;
	}
`
export const SectionDescription = styled.p`
	color: var(--color-dark);
	margin-bottom: 3rem;
`
export const SectionTitle = styled.h2`
	font-size: 2.2rem;
	color: var(--color-com);
	margin-bottom: 2rem;
`
export const SectionInfo = styled.p`
	margin: 3rem 0 2rem;
	color: var(--color-com);
	font-weight: 500;
`
