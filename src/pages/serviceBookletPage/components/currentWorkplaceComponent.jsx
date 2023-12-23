import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { getLastAddedServiceBookletEntryByUserId } from '../../../service/getLastAddedServiceBookletEntryByUserId';
import { handleDataFromLastAdded } from '../utils/handleDataFromLastAdded';
import leaveFromWorkplace from '../utils/leaveFromWorkplace';
import serviceBookletService from '../../../service refactor/serviceBookletService';

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
      const data = await serviceBookletService.getLastAddedServiceBookletEntryByUserId();
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
      <div className="workplace-info">
        <div lassName="message-box">
          <p>{error.message}</p>
        </div>
      </div>
    );
  } else if (isLoading) {
    return <p>loading....</p>;
  } else if (!lastEntry) {
    return (
      <div className="workplace-info">
        <div className="message-box">
          <p className="message-content">Nie udalo sie znelezc wpisu</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="workplace-info">
        {lastEntry.length > 0 ? (
          lastEntry.map((element, id) => (
            <div key={id} className="message-box">
              <p className="message-content">{element.message}</p>
              <div className="button">
                {element.isPosted === true && (
                  <button className="btn-primary" onClick={() => handleLeave(element.id)}>
                    zakoncz prace
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="message-box">
            <p className="message-content">{lastEntry.message}</p>
            <div className="button">
              {lastEntry.isPosted === true && (
                <button className="btn-primary" onClick={() => handleLeave(lastEntry.id)}>
                  zakoncz prace
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default CurrentWorkplaceComponent;
