import * as type from "./typeActions";

export const addFlashMessage = notification => ({
    type: type.ADD_FLASH_MESSAGE,
    notification: {
        key: new Date().getTime() + Math.random(),
        ...notification,
    },
});

export const removeFlashMessage = key => ({
    type: type.REMOVE_FLASH_MESSAGE,
    key,
});
