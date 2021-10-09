

export function currentDateTimeLocal(){
    const now = new Date();

    // When we convert to an ISO string, it will automatically adjust the time
    // to UTC which we DONT want (we want local time), therefore we counteract it by
    // preemptively subtracting the offset.
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

    // Convert to ISO string which adds the offset but since we already subtracted it,
    // our time should be back to the local time.
    let result = now.toISOString();

    // Remove the "Z" letter at the end which normally represents that it's UTC,
    // since it's not, it's local.
    result = result.slice(0, -1);

    // Remove the milliseconds since that's too granular for our purposes.
    result = result.slice(0, -7);

    return result;
}