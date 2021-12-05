import { setRecoil } from "../components/external_state";
import PromptContainer, { Option } from "../components/prompt";
import { Prompt } from "../modules/prompt";
import { openedFolders } from "../utils/atoms";
import { openFolderPicker } from "../utils/commands";

function GlobalPromptContainer() {
  const options: Option[] = [
    {
      label: "Open Folder",
      async onSelected({ closePrompt }) {
        closePrompt();
        const openedFolder = await openFolderPicker("local");
        // If a folder selected
        if (openedFolder != null) {
          // Clear all opened folders and open the selected one
          setRecoil(openedFolders, [
            {
              path: openedFolder,
            },
          ]);
        }
      },
    },
  ];

  return <PromptContainer options={options} />;
}
console.log;
export default class GlobalPrompt extends Prompt {
  public static promptName = "Global Prompt";
  public static container = GlobalPromptContainer;
  public static shortcut = "ctrl+p";
}
