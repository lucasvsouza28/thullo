import { useCallback } from 'react';
import { useTheme } from 'styled-components';
import * as SC from './tags-list.styles';

const TagsList = ({
  tags,
}: {
  tags: string[] | undefined,
}) => {
  const theme = useTheme();

  const getTagColors = useCallback(() => {
    type BadgeType = typeof theme.colors.elements.badge;
    const badge = theme.colors.elements.badge;
    const colors = Object.keys(badge);
    const randIndex = Math.floor(Math.random() * colors.length);
    const key = colors[randIndex] as keyof BadgeType;

    return badge[key];
  }, []);

  if ((tags?.length ?? 0) === 0) return null;

  return (
    <SC.Container>
      {tags!.map((tag, i) => {
        const { el, text } = getTagColors();

        return (
          <SC.Tag
            key={i}
            color={text}
            background={el}
          >
            {tag}
          </SC.Tag>
        )}
      )}
    </SC.Container>
  )
}

export default TagsList
