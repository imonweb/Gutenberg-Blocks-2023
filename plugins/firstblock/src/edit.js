import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function edit() {
  const blockProps = useBlockProps();
    console.log(blockProps);
  return  <p {...blockProps}>Edit jsx</p>;
}