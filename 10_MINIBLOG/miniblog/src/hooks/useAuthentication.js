import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return 
        }
    }

    //register
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{
                const {user} =  await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                )

                await updateProfile(user, {
                    displayName: data.displayName
                })

                setLoading(false)

                return user

        }catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

                let systemErrorMessage

                if(error.message.includes("Password")) {
                    systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
                }else if (error.message.includes("email-already")) {
                    systemErrorMessage = "E-mail já cadastrado"
                } else {
                    systemErrorMessage = "Ocorreu erro, por favor tente mais tarde."
                }
                setLoading(false)
                setError(systemErrorMessage)
        }

       
    }

    //logout - sign out
    const logout = () => {
        
        checkIfIsCancelled()
        signOut(auth)
    }

    //login - sign in
const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null); // Corrigido para resetar o erro

    try {
        // Tenta autenticar o usuário
        await signInWithEmailAndPassword(auth, data.email, data.password);
        setLoading(false);
    } catch (error) {
        let systemErrorMessage;

        // Verifica o código do erro
        if (error.code === "auth/user-not-found") {
            systemErrorMessage = "Usuário não encontrado.";
        } else if (error.code === "auth/wrong-password") {
            systemErrorMessage = "Senha incorreta.";
        } else if (error.code === "auth/invalid-email") {
            systemErrorMessage = "E-mail inválido.";
        } else {
            // Caso genérico para erros desconhecidos
            console.error("Erro inesperado:", error);
            systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }

        // Define o erro no estado
        setError(systemErrorMessage);
        setLoading(false);
    }
};

useEffect(() => {
    return () => setCancelled(true)
},[]) 


return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
}

}

