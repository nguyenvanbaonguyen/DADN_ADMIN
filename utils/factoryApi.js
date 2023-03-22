// const deleteMany = (apiDel, apiReset, ids) => async () => {
// 	try {
// 		// try delete many
// 		if (ids.length <= 0) return;
// 		await Promise.all(
// 			ids.map(async (id) => {
// 				await api.delete(id);
// 			})
// 		);

// 		//Reset page
// 		dispatch(callWaitlists(params));
// 		closeModalDelete();
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
