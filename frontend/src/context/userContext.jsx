import { useAuth0 } from '@auth0/auth0-react'
import { createContext, useCallback, useEffect, useState } from 'react'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
	const [userAccess, setSetUserAccess] = useState({})
	const { user, getAccessTokenSilently, isAuthenticated } = useAuth0()
	const getAccessToken = useCallback(async () => {
		try {
			const accessToken = await getAccessTokenSilently({
				authorizationParams: {
					audience: import.meta.env.VITE_AUTH0_AUDIENCE_API,
				},
			})
			const isAllowedAccess =
				isAuthenticated &&
				user.email_verified &&
				import.meta.env.VITE_ADMIN.includes(user.sub && user.rolesDeUsuario[0])
			setSetUserAccess({ accessToken, isAllowedAccess })
		} catch (e) {
			console.log(e.message)
		}
	}, [getAccessTokenSilently, user, isAuthenticated])
	useEffect(() => {
		user && getAccessToken()
	}, [user, getAccessToken])

	return (
		<UserContext.Provider value={userAccess}>{children}</UserContext.Provider>
	)
}
