// Get the midnight of the day of the given timestamp
export function getDayStart(timestamp) {
  const date = new Date(timestamp);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}


const replacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '/': '&#x2F;',
  '"': '&quot;',
  "'": '&#x27;',
};


// Utility: Escape HTML.
export function escapeHtml(str) {
  return String(str).replace(/[&<>"'/]/g, s => replacements[s]);
}


// Formats an event structure to a form with a human-readable text and presentation metadata
export function formatEvent(event, messageType) {
  let text;

  if (event.type === 'create') {
    text = `Loi kohteen: ${escapeHtml(event.text)}`;
  } else if (event.type === 'delete') {
    text = 'Poisti kohteen';
  } else if (event.type === 'comment') {
    text = escapeHtml(event.comment);
  } else if (event.type === 'edit') {
    text = `Muokkasi kohdetta: ${escapeHtml(event.text)}`;
  } else if (event.type === 'statechange') {
    const messageTypes = messageType.workflow.statesBySlug;
    const oldLabel = messageTypes[event.oldState];
    const newLabel = messageTypes[event.newState];
    let oldLabelHtml;
    let newLabelHtml;
    if (oldLabel) {
      oldLabelHtml = `<span class="label ${oldLabel.labelClass}">${escapeHtml(oldLabel.name)}</span>`;
    } else {
      oldLabelHtml = 'tuntematon tila';
    }
    if (newLabel) {
      newLabelHtml = `<span class="label ${newLabel.labelClass}">${escapeHtml(newLabel.name)}</span>`;
    } else {
      newLabelHtml = 'tuntematon tila';
    }

    text = `Vaihtoi kohteen tilan: ${oldLabelHtml} &rArr; ${newLabelHtml}`;
  } else {
    // Unknown event type
    text = '?';
  }

  return {
    time: event.formattedTime,
    html: text,
    classes: `infokala-event-${event.type}`,
    author: event.author,
  };
}