import { useEffect, useState } from "@wordpress/element"
import { useBlockProps, RichText, MediaPlaceholder, BlockControls, MediaReplaceFlow, InspectorControls, store as blockEditorStore } from "@wordpress/block-editor"
import { __ } from '@wordpress/i18n'
import { useSelect } from '@wordpress/data'
import { isBlobURL, revokeBlobURL } from '@wordpress/blob'
import { Spinner, withNotices, ToolbarButton, PanelBody, TextareaControl, SelectControl } from '@wordpress/components' 

function Edit( {attributes, setAttributes, noticeOperations, noticeUI} ) {
  
  const {name, bio, url, alt, id} = attributes;
  const [blobURL, setBlobURL] = useState();

  const imageObject = useSelect((select) => {
    const {getMedia} = select("core")
    return id ? getMedia(id) : null
  }, [id])

  // console.log(imageObject)
  
  const imageSizes = useSelect((select) => {
    return select(blockEditorStore).getSettings().imageSizes
  }, [])
  // console.log(imageSizes)

  const onChangeName = (newName) =>{
    setAttributes({name: newName})
  }
  const onChangeBio = (newBio) => {
    setAttributes({bio: newBio})
  }
  const onSelectImage = (image) => {
    // console.log(image);
    if(!image || !image.url){
      setAttributes({url: undefined, id: undefined, alt: ''})
      return;
    }
    setAttributes( {url: image.url, id: image.id, alt: image.alt})
  }
  console.log(url);

  const onSelectURL = (newURL) => {
    setAttributes({
      url: newURL,
      id: undefined,
      alt: '',
    })
  }

  const onUploadError = (message) => {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message)
  }

  const removeImage = () => {
    setAttributes({
      url: undefined,
      alt: '',
      id: undefined,
    })
  }

  const onChangeAlt = () => {
    setAttributes({ alt: newAlt })
  }

  useEffect( () => {
    if(!id && isBlobURL(url)){
      setAttributes({
        url: undefined,
        alt: '',
      })
    }
  }, [])

  useEffect(() => {
    if(isBlobURL(url)){
      setBlobURL(url);
    } else {
      revokeBlobURL(blobURL);
      setBlobURL();
    }
  }, [url]) 
  return (
    <> 
    <InspectorControls>
      <PanelBody title={__("Image Settings", "team-members")}>
        {id &&
          <SelectControl 
            label={__("Image Size","team-members")} 
            options={[
              {
                label: "Size 1",
                value: "Value 1"
              },
               {
                label: "Size 2",
                value: "Value 2"
              }
            ]}
            value="Value 2"
            onChange={(value) => console.log(value)}
          />
        }
        {url && !isBlobURL() && 
        <TextareaControl 
          label={__("Alt Text", "team-members")}
          value={alt}
          onChange={onChangeAlt}
          help={__("Alternative text describes your image to people that can't see it. Add a short description with it's key details", "team-members")}
        />
        }
      </PanelBody>
    </InspectorControls>
    {url && (
    <BlockControls group="inline">
      <MediaReplaceFlow 
        name={__("Replace Image", "team-members")}
        onSelect={onSelectImage}
        onSelectURL={ onSelectURL }
        onError={ onUploadError }
        accept="image/*"
        allowedTypes={["image"]}
      />
      <ToolbarButton
        onClick={ removeImage }
      >
        {__("Remove Image","team-members")}
      </ToolbarButton>
    </BlockControls>
    ) }
    <div {...useBlockProps}>
      {
        url && 
        ( <div 
            className={`wp-block-blocks-course-team-member-img${ isBlobURL(url) ? 'is-loading' : '' }`}
          ><img src={url} alt={alt} />
           {isBlobURL(url) && <Spinner />}
          </div> 
        )
      }
      <MediaPlaceholder 
        icon="admin-users"
        onSelect={onSelectImage}
        onSelectURL={ onSelectURL }
        onError={ onUploadError }
        accept="image/*"
        allowedTypes={["image"]}
        disableMediaButtons={url}
        notices={noticeUI}
      />
      <RichText 
        placeholder={ __("Member Name", "team-member") }
        tagName="h4"
        onChange={onChangeName}
        value={ name }
        allowedFormats={[]}
      />
      <RichText 
        placeholder={ __("Member Bio", "team-member") }
        tagName="p"
        onChange={onChangeBio}
        value={ bio }
        allowedFormats={[]}
      />
  </div>
  </>
  );
}

export default withNotices(Edit);