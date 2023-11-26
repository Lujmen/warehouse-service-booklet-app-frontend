import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { getLastAddedServiceBookletEntryByUserId } from '../../../service/getLastAddedServiceBookletEntryByUserId';
import { handleDataFromLastAdded } from '../utils/handleDataFromLastAdded';
import leaveFromWorkplace from '../utils/leaveFromWorkplace';

const CurrentWorkplaceComponent = () => {
  const queryClient = useQueryClient();
  const {
    data: lastEntry,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['lastEntry'],
    queryFn: async () => {
      const data = await getLastAddedServiceBookletEntryByUserId();
      return await handleDataFromLastAdded(data);
    },
    gcTime: 0,
    retry: false,
  });
  const handleLeave = (id) => {
    leaveFromWorkplace(id).then(() => {
      queryClient.invalidateQueries({ queryKey: ['lastEntries'] });
      refetch();
    });
  };

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  } else if (isLoading) {
    return <h1>loading....</h1>;
  } else if (!lastEntry) {
    return <h1>Nie udalo sie znelezc wpisu</h1>;
  } else {
    return (
      <div>
        <div>
          {lastEntry.length > 0 ? (
            lastEntry.map((element, id) => (
              <div key={id}>
                <h1>{element.message}</h1>
                {element.isPosted === true && <button onClick={() => handleLeave(element.id)}>zakoncz prace</button>}
              </div>
            ))
          ) : (
            <div>
              <h1>{lastEntry.message}</h1>
              {lastEntry.isPosted === true && <button onClick={() => handleLeave(lastEntry.id)}>zakoncz prace</button>}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default CurrentWorkplaceComponent;
