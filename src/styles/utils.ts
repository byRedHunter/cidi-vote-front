import styled from 'styled-components'

export const FormInput = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	position: relative;
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
		padding: 1rem;
		min-width: 100%;
		width: 100%;
		max-width: 100%;
		min-height: 15rem;
		height: 15rem;
		max-height: 15rem;
	}
	.icon {
		height: 4rem;
		width: 4rem;
		background: var(--color-dark);
		position: absolute;
		right: 0;
		bottom: 0;
		display: grid;
		place-items: center;
		cursor: pointer;
		span svg {
			color: var(--color-com);
			fill: var(--color-com);
			height: 3rem;
			width: 3rem;
		}
	}
`
export const FormCheck = styled.div`
	width: 100%;
	display: flex;
	align-items: ce;
	justify-content: space-between;
	margin-bottom: 3rem;
	input {
		border-color: var(--color-com);
		height: 1.5rem;
		width: 1.5rem;
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
	font-size: 1.8rem;
`
export const ModalTitle = styled.h1`
	font-size: 2.4rem;
	margin-bottom: 1rem;
`
export const ListCandidates = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`
export const CardCWrapper = styled.article`
	width: 100%;
	min-height: 22rem;
	background: var(--color-main);
	overflow: hidden;
	border-radius: 0.5rem;
	figure {
		width: 100%;
		height: 12rem;
	}
	div {
		padding: 1rem;
	}
	p {
		color: var(--color-light);
	}
	button {
		margin-top: 1rem;
		width: 100%;
		background: var(--color-dark);
		font-size: 1.2rem;
		color: var(--color-light);
		padding: 1rem 0;
	}
`
export const UlGrid = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	li {
		display: grid;
		grid-template-columns: 5rem 1fr 8rem;
		column-gap: 1rem;
		align-items: center;
	}
	li.line {
		border-bottom: 0.2rem solid var(--color-com);
		padding-bottom: 0.5rem;
	}
	span {
		font-weight: 500;
		color: var(--color-main);
	}
	figure {
		border-radius: 50%;
		height: 5rem;
		width: 5rem;
		overflow: hidden;
	}
	p {
		font-size: 1.4rem;
	}
	button {
		width: 100%;
		background: var(--color-dark);
		font-size: 1.4rem;
		color: var(--color-light);
		padding: 0.8rem 0;
		text-transform: capitalize;
	}
`
