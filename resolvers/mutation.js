module.exports = {
    toggleFavouriteSession: (parent, {id}, {dataSources}, info) => {
        return dataSources.sessionAPI.toggleFavoriteSession(id)
    },
    addNewSession: (parent, {session}, {dataSources}, info) => {
        return dataSources.sessionAPI.addSession(session)
    },

}