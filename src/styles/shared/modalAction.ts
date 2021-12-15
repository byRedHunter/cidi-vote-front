import styled from 'styled-components'

interface ModalStyle {
	bg?: string
}

export const ModalActionStyle = styled.div`
	width: 30rem;
	padding: 2rem;
	background: ${({ bg }: ModalStyle) => (bg ? bg : 'var(--color-com)')};
	border-radius: 0.5rem;
	p {
		font-size: 2rem;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 2rem;
	}
	button {
		width: 8rem;
		height: 3rem;
		font-size: 1.2rem;
		text-align: center;
		background: var(--color-main);
		color: var(--color-light);
	}
	button:last-of-type {
		background: var(--color-light);
		color: var(--color-dark);
	}
`
