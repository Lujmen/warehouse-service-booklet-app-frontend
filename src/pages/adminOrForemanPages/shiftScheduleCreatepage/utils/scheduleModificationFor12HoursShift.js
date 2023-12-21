import { sheduleService } from '../../../../service/shceduleService';
import { workplaces } from '../data/data';
// i think this works fine
export const scheduleModificationFor12HoursShift = (is12Hours, setShcedule, setUsers) => {
  // when i make shift 12h long meybe i shuld mark it somehow
  //workaplces is constant and i can iterate over it to remove from schedule third shift
  //beacouse this main concept remove workplace from third shift if shift for this workpalce presist 12h
  const workplacesToRemove = workplaces.filter((workplace) => is12Hours[workplace] === true);
  workplacesToRemove.map((workplaceToRemove) => {
    //if users assigned to concrete workplace i must change column id
    setUsers((prev) =>
      prev.map((element) => (element.columnId === `${workplaceToRemove}thirdShift` ? { ...element, columnId: 'unsigned' } : element))
    );

    setShcedule((prev) => ({
      ...prev,
      thirdShift: prev.thirdShift.filter((workplace) => workplace.workplace !== workplaceToRemove),
      firstShift: prev.firstShift.map((workplace) =>
        workplace.workplace === workplaceToRemove ? { ...workplace, is12HoursShift: true } : workplace
      ),
      secondShift: prev.secondShift.map((workplace) =>
        workplace.workplace === workplaceToRemove ? { ...workplace, is12HoursShift: true } : workplace
      ),
    }));
    // if i remove third shift i must change users state beacouse all users whoe placed in first and second shift at concrete workplace change shift duration
    setUsers((prev) =>
      prev.map((element) =>
        element.columnId === `${workplaceToRemove}firstShift` || element.columnId === `${workplaceToRemove}secondShift`
          ? { ...element, is12HoursShift: true }
          : element
      )
    );
  });
  //its working now i must do revers
  //meybe i sould do this function separately
  const workplacesToAdd = workplaces.filter((workplace) => is12Hours[workplace] === false);
  workplacesToAdd.map((workplaceToAdd) => {
    // i need change scedule duration to 8 if i add workplace to third shift

    setShcedule((prev) => {
      //create copy of entire third shift and another shifts to changing shift duration

      let updateFirstShift = [...prev.firstShift];
      let updateSecondShift = [...prev.secondShift];
      const updatedThirdShift = [...prev.thirdShift];
      //check is workplace to add exists in third shift
      const isWorkplaceExists = updatedThirdShift.some((workplace) => workplace.workplace === workplaceToAdd);
      if (!isWorkplaceExists) {
        updatedThirdShift.push({ workplace: workplaceToAdd, users: [] });
        updateFirstShift = updateFirstShift.map((firstShift) =>
          firstShift.workplace === workplaceToAdd ? { ...firstShift, is12HoursShift: false } : firstShift
        );
        updateSecondShift = updateSecondShift.map((secondShift) =>
          secondShift.workplace === workplaceToAdd ? { ...secondShift, is12HoursShift: false } : secondShift
        );
        //set state of user if is12HourShift to false if i add shift for cocnrete workplace
        setUsers((prev) =>
          prev.map((element) =>
            element.columnId === `${workplaceToAdd}firstShift` || element.columnId === `${workplaceToAdd}secondShift`
              ? { ...element, is12HoursShift: false }
              : element
          )
        );
      }
      return { ...prev, firstShift: updateFirstShift, secondShift: updateSecondShift, thirdShift: updatedThirdShift };
    });
  });
};
