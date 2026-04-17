export const notificationMiddleware = store => next => action => {
    const result = next(action);

    // ловим добавление инструмента когда он закидывается в memorystorage
    if(action.type === "instruments/create/fulfilled"){
        setTimeout(()=>{
            alert('Инструмент добавлен!')
        }, 1000);
    }

    if(action.type === "instruments/delete/fulfilled"){
        setTimeout(()=>{
            alert('Инструмент удален')
        }, 1000);
    }

     if(action.type === "instruments/update/fulfilled"){
        setTimeout(()=>{
            alert('Инструмент изменен')
        }, 1000);
    }


    return result;
}