import styled from 'styled-components'

export const LoginWrapper = styled.section`
	height: 100%;
	width: 100%;
	background: linear-gradient(
		156.96deg,
		var(--color-main) -10.64%,
		var(--color-dark) 107.78%
	);
	display: grid;
	place-items: center;
`
export const FormLogin = styled.form`
	width: 83%;
	box-shadow: var(--box-shadow);
	border-radius: 0.8rem;
	background: var(--color-light);
	min-height: 40rem;
`
export const LoginHeader = styled.div`
	width: 100%;
	height: 18rem;
	background: url('/images/form-login.png');
	background-position: center;
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	padding: 3rem 2rem 0;
`
export const LoginBody = styled.div`
	padding: 2rem 3rem 4rem;
	display: flex;
	flex-direction: column;
	button {
		margin-top: 1rem;
	}
`
