import * as React from "react";
import * as Styles from "@root/markdown/render/elements/code/style";

interface Props {
  children: string;
  language?: string;
}

class Highlighter extends React.Component<Props> {
  private mounted = true;
  state = {
    highlightedCode: null,
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate(prevProps: Props) {
    // If the text changed make sure to reset the state
    // This way we ensure that the new text is immediately displayed.
    if (prevProps.children !== this.props.children) {
      this.setState({ highlightedCode: null });
      return;
    }

    // Do not call highlight.js if we already have highlighted code
    // If the children changed highlightedCode will be null
    if (this.state.highlightedCode) return;

    this.highlightCode();
  }

  async highlightCode() {
    try {
      const language = this.props.language;
      const code = this.props.children;

      if (!language) return;

      const {default: hljs} = await import(
        /* webpackChunkName: "highlight.js" */ "highlight.js"
      );

      if (!hljs.getLanguage(language)) return;

      const highlightedCode = hljs.highlight(language, code, true).value;
      if (this.mounted) this.setState({ highlightedCode });
    } catch (e) {}
  }

  render() {
    const { highlightedCode } = this.state;
    const initialCode = this.props.children;

    return highlightedCode ? (
      <Styles.CodeBlock dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    ) : (
      <Styles.CodeBlock>{initialCode}</Styles.CodeBlock>
    );
  }
}

export default Highlighter;
