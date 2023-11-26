import setFinishServiceBookletModel from '../../../service/setFinishServiceBookletModel';
const leaveFromWorkplace = async (id) => {
  return await setFinishServiceBookletModel(id);
};

export default leaveFromWorkplace;
