import React from 'react';
import moment from "moment";

export default function UtcDate({dateTimeString}){

    // The "dateTimeString" property should include a timezone offset,
    // therefore it's unambiguous and we can safely display it in whichever
    // timezone we want.
    const utcDateTime = moment.utc(dateTimeString);
    return (
        <>
            {utcDateTime.format('YYYY-MM-DD')}
        </>
    )

}