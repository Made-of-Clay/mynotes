
import noteOrders from '~/order';

export default {
  // vm.category and vm.allNotes should be set on whatever component uses this mixin
  computed: {
    order: vm => vm.category ? noteOrders[vm.category] : [],
    orderedNotes: vm => vm.allNotes.reduce((notes, { node: note }) => {
      // this note the right category? no? ignore it
      if (note.category && note.category.title === vm.category) {
        const noteToPush = vm.orderedNotesIncludesH1
          ? note
          : Object.assign({}, note, { // filters note headers
            headings: (note.headings || []).filter(heading => heading.depth > 1)
          });
        const index = vm.order.indexOf(note.fileInfo.name);
        notes[index] = noteToPush;
      }
      return notes;
    }, []),
  },
};