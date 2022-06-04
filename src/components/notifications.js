import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './notifications.css'

let MySwal = withReactContent(Swal)

const Toast = MySwal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: '#a5dc86',
    heightAuto: false,
    customClass: {
        popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
})

export const todoCreationSuccess = () => {
    Toast.fire({
        icon: 'success',
        title: 'Todo created successfully'
    })
}

export const todoCompletionSuccess = () => {
    Toast.fire({
        icon: 'success',
        title: 'Todo completed'
    })
}

export const addToFavorites = () => {
    Toast.fire({
        icon: 'success',
        title: 'Todo added to favorites'
    })
}

export const todoRemoveFromFavorites = () => {
    Toast.fire({
        icon: 'success',
        title: 'Todo removed from favorites'
    })
}